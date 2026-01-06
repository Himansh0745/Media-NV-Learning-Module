import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserRequestDto } from './dto/create-user-request.dto';
import { UpdateUserRequestDto } from './dto/update-user-request.dto';
import { UserResponseDto } from './dto/create-user-response.dto'; 

@ApiTags('Users')
@Controller('users')
export class UserController {
  private readonly logger = new Logger(UserController.name);

  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, type: UserResponseDto })
  async create(@Body() dto: CreateUserRequestDto) {
    const user = await this.userService.createUser(dto);
    return {
      statusCode: HttpStatus.CREATED,
      data: user,
      message: 'User created successfully',
    };
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  async findAll() {
    const users = await this.userService.getAllUsers();
    return {
      statusCode: HttpStatus.OK,
      data: users,
      message: 'Users fetched successfully',
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by ID' })
  async findOne(@Param('id') id: number) {
    const user = await this.userService.getUserById(id);
    return {
      statusCode: HttpStatus.OK,
      data: user,
      message: 'User fetched successfully',
    };
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a user' })
  async update(@Param('id') id: number, @Body() dto: UpdateUserRequestDto) {
    const user = await this.userService.updateUser(id, dto);
    return {
      statusCode: HttpStatus.OK,
      data: user,
      message: 'User updated successfully',
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user (hard delete)' })
  async remove(@Param('id') id: number) {
    await this.userService.deleteUser(id);
    return {
      statusCode: HttpStatus.OK,
      data: {},
      message: 'User deleted successfully',
    };
  }
}
