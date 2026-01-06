import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsInt, Min, Max } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreatePatientRequestDto {
  @ApiProperty({ example: 'Rahul' })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  firstName: string;

  @ApiProperty({ example: 'Sharma' })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  lastName: string;

  @ApiProperty({ example: 30 })
  @IsInt()
  @Min(0)
  @Max(150)
  age: number;

  @ApiProperty({ example: 'M' })
  @IsString()
  @IsNotEmpty()
  gender: string;
}
