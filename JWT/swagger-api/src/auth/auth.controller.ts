import { Controller, Body, Post, Patch, Delete, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import {LoginRequestDto} from './dtos/login.dto';
import {RegisterRequestDto} from './dtos/register.dto';
import { ApiOkResponse, ApiTags, ApiOperation, ApiBody, ApiCreatedResponse } from '@nestjs/swagger';
import { AuthResponseDto } from './dtos/auth-response.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}


    @Post("login")
    @ApiOperation({ summary: 'User login' })
    @ApiBody({ type: LoginRequestDto })
    @ApiOkResponse({ type: AuthResponseDto })
    login(@Body() credentials: LoginRequestDto){
        return {message: 'success'}
    }

     @Post("register")
    @ApiOperation({ summary: 'User registration' })
    @ApiBody({ type: RegisterRequestDto })
    @ApiCreatedResponse({ type: AuthResponseDto })
    register(@Body() SingupDate: RegisterRequestDto){
        return {message: 'User Created'}
    }

    @Patch('update')
    @ApiOperation({ summary: 'Update user', description: 'Update basic user details' })
    @ApiBody({ type: RegisterRequestDto })
    @ApiOkResponse({ type: AuthResponseDto })
    updateUser(@Body() updateDto: RegisterRequestDto){
        return { message: 'User Updated' };
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete user', description: 'Delete user by id' })
    @ApiOkResponse({ type: AuthResponseDto })
    deleteUser(@Param('id') id: string){
        return { message: 'User Deleted' };
    }
}
