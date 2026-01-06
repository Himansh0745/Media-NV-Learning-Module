import { ApiProperty } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common';

export class UpdateUserResponseDto {
  @ApiProperty({ example: HttpStatus.OK })
  statusCode: number;

  @ApiProperty({
    example: {
      id: 3,
      firstName: 'Ram',
      lastName: 'Pradhan',
      email: 'ram@gmail.com',
      role: 'DOCTOR',
      isActive: true,
      createdAt: '2026-01-05T10:00:00.000Z',
    },
  })
  data: {
    id: number;
    firstName: string;
    lastName?: string;
    email: string;
    role: string;
    isActive: boolean;
    createdAt: string;
  };

  @ApiProperty({ example: 'User updated successfully' })
  message: string;
}
