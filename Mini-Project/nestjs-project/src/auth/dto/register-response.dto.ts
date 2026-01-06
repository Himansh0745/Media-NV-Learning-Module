import { ApiProperty } from '@nestjs/swagger';

export class RegisterResponseDto {
  @ApiProperty({ example: 201 })
  statusCode: number;

  @ApiProperty({
    example: {
      id: 1,
      email: 'ram@gmail.com',
      role: 'PATIENT',
    },
  })
  data: object;

  @ApiProperty({ example: 'User registered successfully' })
  message: string;
}
