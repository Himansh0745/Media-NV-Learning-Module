import { IsInt, IsString } from "class-validator";


export class CreateCustomerDto {
    @IsString()
    name:string;
    @IsString()
    email:string;
    @IsInt()
    phone:number;
}