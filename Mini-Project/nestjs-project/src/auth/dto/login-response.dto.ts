import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto {
  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ 
    example: { 
      accessToken: 'thisIsAToken.example.jwttokenexample' 
    }
  })
  data: object;

  
  @ApiProperty({ example: 'Login successful' })
  message: string;
}