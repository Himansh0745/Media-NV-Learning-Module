import { ApiProperty } from '@nestjs/swagger';

import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Role } from '../../common/enums/role.enum';

export class RegisterRequestDto {
  @ApiProperty({ example: 'Akash' })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: 'kumar' })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ example: 'akash.kumar@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Test@123' })
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'PATIENT' })
  @IsEnum(Role)
  role: Role;
}
