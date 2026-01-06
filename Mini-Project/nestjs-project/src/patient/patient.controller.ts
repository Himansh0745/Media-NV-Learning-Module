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
import { PatientService } from './patient.service';
import { CreatePatientRequestDto } from './dto/create-patient-request.dto';
import { UpdatePatientRequestDto } from './dto/update-patient-request.dto';
import { PatientResponseDto } from './dto/patient-response.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Patients')
@Controller('patients')
export class PatientController {
  private readonly logger = new Logger(PatientController.name);

  constructor(private readonly patientService: PatientService) {}

  @Post()
  @ApiOperation({ summary: 'Create a patient' })
  @ApiResponse({ status: 201, type: PatientResponseDto })
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  async create(@Body() dto: CreatePatientRequestDto, @Req() req: any) {
    const userId = req.user?.userId;
    if (!userId) {
      throw new UnauthorizedException('Missing authenticated user in request');
    }

    const patient = await this.patientService.create(dto, userId);
    return {
      statusCode: HttpStatus.CREATED,
      data: patient,
      message: 'Patient created successfully',
    };
  }

  @Get()
  @ApiOperation({ summary: 'Get all patients' })
  async findAll() {
    const patients = await this.patientService.findAll();
    return {
      statusCode: HttpStatus.OK,
      data: patients,
      message: 'Patients fetched successfully',
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get patient by ID' })
  async findOne(@Param('id') id: number) {
    const patient = await this.patientService.findOne(id);
    return {
      statusCode: HttpStatus.OK,
      data: patient,
      message: 'Patient fetched successfully',
    };
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update patient by ID' })
  async update(@Param('id') id: number, @Body() dto: UpdatePatientRequestDto) {
    const patient = await this.patientService.update(id, dto);
    return {
      statusCode: HttpStatus.OK,
      data: patient,
      message: 'Patient updated successfully',
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete patient by ID' })
  async remove(@Param('id') id: number) {
    await this.patientService.delete(id);
    return {
      statusCode: HttpStatus.OK,
      data: {},
      message: 'Patient deleted successfully',
    };
  }
}
