import { ApiProperty } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common';

export class UserResponseDto {
  @ApiProperty({ example: HttpStatus.OK })
  statusCode: number;

  @ApiProperty({
    example: {
      id: 1,
      name: 'Himanshu Kumar Pradhan',
      email: 'pradhan.himanshu@gmail.com',
      role: 'DOCTOR',
      isActive: true,
      createdAt: '2026-01-06T10:00:00.000Z',
    },
  })
  data: object;

  @ApiProperty({ example: 'User created successfully' })
  message: string;
}
