import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginRequestDto {
  @ApiProperty({ example: 'ram@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Test@123' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
