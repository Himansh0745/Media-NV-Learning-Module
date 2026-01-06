import { ApiProperty } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common';

export class DoctorResponseDto {
  @ApiProperty({ example: HttpStatus.OK })
  statusCode: number;

  @ApiProperty({
    example: {
      id: 1,
      firstName: 'Kumari',
      lastName: 'Swati',
      email: 'kumari.swati@example.com',
      specialization: 'Cardiologist',
      experience: 5,
      isActive: true,
      createdAt: '2026-01-06T10:00:00.000Z',
      updatedAt: '2026-01-06T10:00:00.000Z',
    },
  })
  data: object;

  @ApiProperty({ example: 'Success' })
  message: string;
}
