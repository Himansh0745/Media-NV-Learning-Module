import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { Role } from './roles.enums';
import { ROLES_KEY } from './roles.decorater';


@Injectable()
export class RolesGuard implements CanActivate {

  constructor(private readonly reflector:Reflector){}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if(!requiredRoles) return true;
    const request = context.switchToHttp().getRequest<{headers: Record<string, string>, query?: Record<string, any>}>();
    const userRole = (request.headers['x-user-role'] ?? request.query?.['x-user-role']) as Role;
    return requiredRoles.includes(userRole);
    }
    }
  


