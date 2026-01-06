import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
  HttpStatus,
  Req,
  UseGuards,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { DoctorService } from './doctor.service';
import { CreateDoctorRequestDto } from './dto/create-doctor-request.dto';
import { UpdateDoctorRequestDto } from './dto/update-doctor-request.dto';
import { DoctorResponseDto } from './dto/doctor-response.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Doctors')
@Controller('doctors')
export class DoctorController {
  private readonly logger = new Logger(DoctorController.name);

  constructor(private readonly doctorService: DoctorService) {}

  @Post()
  @ApiOperation({ summary: 'Create a doctor (linked with user)' })
  @ApiResponse({ status: 201, type: DoctorResponseDto })
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  async create(@Body() dto: CreateDoctorRequestDto, @Req() req: any) {
    const userId = req.user?.userId;
    if (!userId) {
      throw new UnauthorizedException('Missing authenticated user in request');
    }

    const doctor = await this.doctorService.create(dto, userId);
    return {
      statusCode: HttpStatus.CREATED,
      data: doctor,
      message: 'Doctor created successfully',
    };
  }

  @Get()
  @ApiOperation({ summary: 'Get all doctors' })
  async findAll() {
    const doctors = await this.doctorService.findAll();
    return {
      statusCode: HttpStatus.OK,
      data: doctors,
      message: 'Doctors fetched successfully',
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get doctor by ID' })
  async findOne(@Param('id') id: number) {
    const doctor = await this.doctorService.findOne(id);
    return {
      statusCode: HttpStatus.OK,
      data: doctor,
      message: 'Doctor fetched successfully',
    };
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update doctor by ID' })
  async update(@Param('id') id: number, @Body() dto: UpdateDoctorRequestDto) {
    const doctor = await this.doctorService.update(id, dto);
    return {
      statusCode: HttpStatus.OK,
      data: doctor,
      message: 'Doctor updated successfully',
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete doctor by ID (hard delete)' })
  async remove(@Param('id') id: number) {
    await this.doctorService.delete(id);
    return {
      statusCode: HttpStatus.OK,
      data: {},
      message: 'Doctor deleted successfully',
    };
  }
}
