import { ApiProperty } from "@nestjs/swagger";


export class CreateProductDto {

  @ApiProperty({description: "THe name of the Product", example: "BMW"})
  name: string;

  @ApiProperty({example: 10000000, required: false})
  price: number;
}


export class CreateProductResponseDto {


  @ApiProperty()
  id:string

  @ApiProperty()
  name: string;

  @ApiProperty()
  price: number;
}