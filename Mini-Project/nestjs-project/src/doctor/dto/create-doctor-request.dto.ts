import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsNotEmpty, IsString, Length, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateDoctorRequestDto {
  @ApiProperty({ example: 'John' })
  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  @Transform(({ value }) => value.trim())
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  @Transform(({ value }) => value.trim())
  lastName: string;

  @ApiProperty({ example: 'john.doe@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Cardiologist' })
  @IsString()
  @IsNotEmpty()
  specialization: string;

  @ApiProperty({ example: 5 })
  @IsInt()
  @Min(0)
  experience: number;
}
