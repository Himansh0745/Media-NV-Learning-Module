import { ApiProperty } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common';

export class PatientResponseDto {
  @ApiProperty({ example: HttpStatus.OK })
  statusCode: number;

  @ApiProperty({
    example: {
      id: 1,
      firstName: 'Rahul',
      lastName: 'Sharma',
      age: 30,
      gender: 'M',
      isActive: true,
      createdAt: '2026-01-06T10:00:00.000Z',
    },
  })
  data: object;

  @ApiProperty({ example: 'Success' })
  message: string;
}
