import { ApiProperty } from '@nestjs/swagger';

export class OrderResponseDto {
  @ApiProperty({ example: '1' })
  id: string | number;

  @ApiProperty({ example: '1' })
  productID: string;

  @ApiProperty({ example: 2 })
  quantity: number;
}

export class CreateOrderRequestDto {
  @ApiProperty({ example: '1' })
  productID: string;

  @ApiProperty({ example: 2, minimum: 1 })
  quantity: number;
}
