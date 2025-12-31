import { Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Body } from '@nestjs/common';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService:CustomerService){}

    @Get()
    getAllCustomers(){
        return this.customerService.getAllCustomers();
    }

    @Post()
    addCustomer(@Body() createCustomerDto:CreateCustomerDto){
        return this.customerService.addCustomer(createCustomerDto);
    }
}
