import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from './entities/patient.entity';
import { CreatePatientRequestDto } from './dto/create-patient-request.dto';
import { UpdatePatientRequestDto } from './dto/update-patient-request.dto';
import { User } from '../user/entities/user.entity';

@Injectable()
export class PatientService {
  private readonly logger = new Logger(PatientService.name);

  constructor(
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(dto: CreatePatientRequestDto, userId: number): Promise<Patient> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    const patient = this.patientRepository.create({ ...dto, user });
    return this.patientRepository.save(patient);
  }

  async findAll(): Promise<Patient[]> {
    return this.patientRepository.find({ where: { isActive: true } });
  }

  async findOne(id: number): Promise<Patient> {
    const patient = await this.patientRepository.findOne({ where: { id } });
    if (!patient) throw new NotFoundException('Patient not found');
    return patient;
  }

  async update(id: number, dto: UpdatePatientRequestDto): Promise<Patient> {
    const patient = await this.findOne(id);
    Object.assign(patient, dto);
    return this.patientRepository.save(patient);
  }

  async delete(id: number): Promise<void> {
    const result = await this.patientRepository.delete(id);
    if (!result.affected) {
      throw new NotFoundException('Patient not found');
    }
  }
}
