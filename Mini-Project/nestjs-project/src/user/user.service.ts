import { Injectable, Logger, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserRequestDto } from './dto/create-user-request.dto';
import { UpdateUserRequestDto } from './dto/update-user-request.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Create user
  async createUser(dto: CreateUserRequestDto): Promise<User> {
    try {
      const hashedPassword = await bcrypt.hash(dto.password, 10);
      const user = this.userRepository.create({ ...dto, password: hashedPassword });
      return await this.userRepository.save(user);
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }

  // Get all users
  async getAllUsers(): Promise<User[]> {
    try {
      return await this.userRepository.find({ where: { isActive: true } });
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }

  // Get user by ID
  async getUserById(id: number): Promise<User> {
    try {
      const user = await this.userRepository.findOne({ where: { id } });
      if (!user) throw new NotFoundException('User not found');
      return user;
    } catch (error) {
      this.logger.error(error.message);
      throw error;
    }
  }

  // Update user
  async updateUser(id: number, dto: UpdateUserRequestDto): Promise<User> {
    try {
      const user = await this.getUserById(id);
      if (dto.password) {
        dto.password = await bcrypt.hash(dto.password, 10);
      }
      Object.assign(user, dto);
      return await this.userRepository.save(user);
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }

  // Hard delete user
  async deleteUser(id: number): Promise<void> {
    try {
      const result = await this.userRepository.delete(id);
      if (!result.affected) {
        throw new NotFoundException('User not found');
      }
    } catch (error) {
      this.logger.error(error.message);
      throw error;
    }
  }
}
