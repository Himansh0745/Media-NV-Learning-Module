import { Controller } from '@nestjs/common';
import { RolesGuard } from '../guard/roles/roles.guard';
import { Get, UseGuards } from '@nestjs/common';
import { Roles } from '../guard/roles/roles.decorater';
import { Role } from '../guard/roles/roles.enums';
// import { get } from 'http';

@Controller('user-roles')
export class UserRolesController {
    @Get('admin-data')
    @UseGuards(RolesGuard)
    @Roles(Role.Admin)
    getAdminData(){
        return {message:'This is admin data'};
    }

    @Get('user-data')
    getUserData(){
        return {message:'Anyone can access'};
    }
}
