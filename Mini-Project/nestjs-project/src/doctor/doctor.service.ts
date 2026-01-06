import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from './entities/doctor.entity';
import { CreateDoctorRequestDto } from './dto/create-doctor-request.dto';
import { UpdateDoctorRequestDto } from './dto/update-doctor-request.dto';
import { User } from '../user/entities/user.entity';

@Injectable()
export class DoctorService {
  private readonly logger = new Logger(DoctorService.name);

  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Create doctor linked with User
  async create(dto: CreateDoctorRequestDto, userId: number): Promise<Doctor> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    const doctor = this.doctorRepository.create({ ...dto, user });
    return this.doctorRepository.save(doctor);
  }

  async findAll(): Promise<Doctor[]> {
    return this.doctorRepository.find({ where: { isActive: true } });
  }

  async findOne(id: number): Promise<Doctor> {
    const doctor = await this.doctorRepository.findOne({ where: { id } });
    if (!doctor) throw new NotFoundException('Doctor not found');
    return doctor;
  }

  async update(id: number, dto: UpdateDoctorRequestDto): Promise<Doctor> {
    const doctor = await this.findOne(id);
    Object.assign(doctor, dto);
    return this.doctorRepository.save(doctor);
  }

  async delete(id: number): Promise<void> {
    const result = await this.doctorRepository.delete(id);
    if (!result.affected) throw new NotFoundException('Doctor not found');
  }
}
