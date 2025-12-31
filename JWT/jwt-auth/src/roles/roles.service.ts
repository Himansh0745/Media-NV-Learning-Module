import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dtos/role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepo: Repository<Role>,
  ) {}

  async createRole(roleDto: CreateRoleDto) {
    const role = this.roleRepo.create(roleDto);
    return this.roleRepo.save(role);
  }

  async getRoleById(roleId: string) {
    const role = await this.roleRepo.findOne({ where: { id: roleId } });
    if (!role) throw new NotFoundException('Role not found');
    return role;
  }

  async getRoleByName(name: string) {
    return this.roleRepo.findOne({ where: { name } });
  }
}