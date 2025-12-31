import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { SignupDto } from './dtos/signup.dto';
import { LoginDto } from './dtos/login.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid';
import { ConfigService } from '@nestjs/config';

import { MailService } from 'src/services/mail.service';
import { RolesService } from 'src/roles/roles.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { RefreshToken } from './entities/refresh-token.entity';
import { ResetToken } from './entities/reset-token.entity';
import { Permission } from 'src/roles/dtos/role.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly mailService: MailService,
    private readonly rolesService: RolesService,
    private readonly config: ConfigService,

    @InjectRepository(User)
    private readonly userRepo: Repository<User>,

    @InjectRepository(RefreshToken)
    private readonly refreshRepo: Repository<RefreshToken>,

    @InjectRepository(ResetToken)
    private readonly resetRepo: Repository<ResetToken>,
  ) {}

  // ---------------- SIGNUP ----------------
  async signup(signupData: SignupDto) {
    const { email, password, name } = signupData;

    const existing = await this.userRepo.findOne({ where: { email } });
    if (existing) {
      throw new BadRequestException('Email already in use');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // assign default role if available
    const defaultRole = (await this.rolesService.getRoleByName('user')) || undefined;

    const user = this.userRepo.create({
      email,
      password: hashedPassword,
      name,
      role: defaultRole,
    } as Partial<User>);

    try {
      const saved = await this.userRepo.save(user);
      // Don't return password
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password: _p, ...safe } = saved as any;
      return safe;
    } catch (e) {
      throw new InternalServerErrorException('Could not create user');
    }
  }

  // ---------------- VALIDATE (for LocalStrategy) ----------------
  async validateUser(email: string, password: string) {
    const user = await this.userRepo.findOne({ where: { email } });
    if (!user) return null;
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) return null;
    return user;
  }

  // ---------------- LOGIN ----------------
  async login(credentials: LoginDto) {
    const { email, password } = credentials;

    const user = await this.userRepo.findOne({ where: { email } });
    if (!user) throw new UnauthorizedException('Wrong credentials');

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) throw new UnauthorizedException('Wrong credentials');

    const tokens = await this.generateUserTokens(user);

    return {
      ...tokens,
      userId: user.id,
    };
  }

  // ---------------- CHANGE PASSWORD ----------------
  async changePassword(
    userId: string,
    oldPassword: string,
    newPassword: string,
  ) {
    const user = await this.userRepo.findOne({ where: { id: userId } });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const passwordMatch = await bcrypt.compare(oldPassword, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Wrong credentials');
    }

    const newHashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = newHashedPassword;
    await this.userRepo.save(user);

    return { message: 'Password updated' };
  }

  // ---------------- FORGOT PASSWORD ----------------
  async forgotPassword(email: string) {
    const user = await this.userRepo.findOne({ where: { email } });

    if (user) {
      const resetToken = nanoid(64);
      const expires = new Date(Date.now() + (parseInt(this.config.get('auth.resetTokenTtl') || '3600') * 1000));

      const record = this.resetRepo.create({ token: resetToken, user, expiresAt: expires });
      await this.resetRepo.save(record);

      await this.mailService.sendPasswordResetEmail(email, resetToken);
    }

    return { message: 'If this user exists, they will receive an email' };
  }

  // ---------------- RESET PASSWORD ----------------
  async resetPassword(newPassword: string, resetToken: string) {
    const tokenRecord = await this.resetRepo.findOne({ where: { token: resetToken }, relations: ['user'] });
    if (!tokenRecord || tokenRecord.used || tokenRecord.expiresAt < new Date()) {
      throw new UnauthorizedException('Invalid or expired link');
    }

    const user = tokenRecord.user;
    user.password = await bcrypt.hash(newPassword, 10);
    await this.userRepo.save(user);

    tokenRecord.used = true;
    await this.resetRepo.save(tokenRecord);

    return { message: 'Password reset successfully' };
  }

  // ---------------- REFRESH TOKENS ----------------
  async refreshTokens(refreshToken: string) {
    const record = await this.refreshRepo.findOne({ where: { token: refreshToken }, relations: ['user'] });
    if (!record) throw new UnauthorizedException('Refresh Token is invalid');

    if (record.expiresAt && record.expiresAt < new Date()) {
      await this.refreshRepo.remove(record);
      throw new UnauthorizedException('Refresh Token expired');
    }

    // rotate token
    const newToken = uuidv4();
    record.token = newToken;
    record.expiresAt = new Date(Date.now() + (parseInt(this.config.get('auth.refreshTokenTtl') || '604800') * 1000));
    await this.refreshRepo.save(record);

    const accessToken = this.jwtService.sign({ userId: record.user.id });

    return {
      accessToken,
      refreshToken: newToken,
    };
  }

  // ---------------- TOKEN GENERATION ----------------
  async createTokensForUser(user: User) {
    return this.generateUserTokens(user);
  }

  private async generateUserTokens(user: User) {
    const accessToken = this.jwtService.sign(
      { userId: user.id },
      { expiresIn: this.config.get('jwt.expiresIn') || '10h' },
    );

    const refreshTokenStr = uuidv4();
    const refreshTtl = parseInt(this.config.get('auth.refreshTokenTtl') || '604800'); // seconds

    const refresh = this.refreshRepo.create({
      token: refreshTokenStr,
      user,
      expiresAt: new Date(Date.now() + refreshTtl * 1000),
    });

    await this.refreshRepo.save(refresh);

    return {
      accessToken,
      refreshToken: refreshTokenStr,
    };
  }

  // ---------------- PERMISSIONS ----------------
  async getUserPermissions(userId: string): Promise<Permission[]> {
    const user = await this.userRepo.findOne({ where: { id: userId }, relations: ['role'] });
    if (!user || !user.role) return [];
    return user.role.permissions || [];
  }
}
