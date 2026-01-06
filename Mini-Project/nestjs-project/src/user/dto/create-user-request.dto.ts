import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsString, Length } from 'class-validator';
import { Transform } from 'class-transformer';
import { Role } from '../../common/enums/role.enum';

export class CreateUserRequestDto {
  @ApiProperty({ example: 'Himanshu Kumar Pradhan' })
  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  @Transform(({ value }) => value.trim())
  name: string;

  @ApiProperty({ example: 'pradhan.himanshu@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'password123' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: 'DOCTOR', enum: Role })
  @IsEnum(Role)
  role: Role;
}
