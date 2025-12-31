import { Controller, Get } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
    @Get()
    getemployee(){
        return "Fetch Employee data Successfully"
    }
}
