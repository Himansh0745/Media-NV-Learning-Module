import { Controller, Post, Body, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterRequestDto } from './dto/register-request.dto';
import { LoginRequestDto } from './dto/login-request.dto';
import { UseGuards, Req, Get } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
// import { Get } from '@nestjs/swagger';    

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register user' })
  async register(@Body() dto: RegisterRequestDto) {
    const data = await this.authService.register(dto);

    return {
      statusCode: HttpStatus.CREATED,
      data,
      message: 'You have been registered successfully',
    };
  }

  @Post('login')
  @ApiOperation({ summary: 'Login user' })
  async login(@Body() dto: LoginRequestDto) {
    const data = await this.authService.login(dto);

    return {
      statusCode: HttpStatus.OK,
      data,
      message: 'Login successful',
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Get logged-in user details' })
  async getProfile(@Req() req: any) {
    return {
      statusCode: HttpStatus.OK,
      data: req.user,
      message: 'User profile fetched successfully',
    };
  }
}

