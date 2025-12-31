import { ApiProperty } from "@nestjs/swagger";

export class GetProductResponseDto {
  @ApiProperty({ example: "1" })
  id: string;

  @ApiProperty({ example: "Laptop" })
  name: string;

  @ApiProperty({ example: 1000 })
  price: number;
}
