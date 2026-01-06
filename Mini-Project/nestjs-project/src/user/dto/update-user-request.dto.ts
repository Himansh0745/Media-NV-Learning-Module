import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, TransformFnParams } from 'class-transformer';
import { IsBoolean, IsEmail, IsEnum, IsOptional, IsString, Length, Matches } from 'class-validator';
import { Role } from '../../common/enums/role.enum';
import { PartialType } from '@nestjs/swagger';
import { CreateUserRequestDto } from './create-user-request.dto';


export class UpdateUserRequestDto extends PartialType(CreateUserRequestDto) {
  @ApiPropertyOptional({ example: 'Ram' })
  @IsOptional()
  @IsString()
  @Length(2, 50)
  @Transform(({ value }: TransformFnParams) =>
    typeof value === 'string' ? value.trim().replace(/\s+/g, ' ') : value,
  )
  firstName?: string;

  @ApiPropertyOptional({ example: 'Pradhan' })
  @IsOptional()
  @IsString()
  @Length(2, 50)
  @Transform(({ value }: TransformFnParams) =>
    typeof value === 'string' ? value.trim().replace(/\s+/g, ' ') : value,
  )
  lastName?: string;

  @ApiPropertyOptional({ example: 'ram@gmail.com' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ example: Role.DOCTOR, enum: Role })
  @IsOptional()
  @IsEnum(Role)
  role?: Role;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
