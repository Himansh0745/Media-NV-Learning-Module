import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSIONS_KEY } from 'src/decorators/permissions.decorator';
import { Permission } from 'src/roles/dtos/role.dto';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly authService: AuthService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Get required permissions from the route metadata
    const requiredPermissions =
      this.reflector.get<Permission[]>(PERMISSIONS_KEY, context.getHandler()) ?? [];

    // If no permissions required, allow access
    if (!requiredPermissions.length) return true;

    const request = context.switchToHttp().getRequest();
    const userId: string = request.user?.userId || request.userId;

    if (!userId) throw new ForbiddenException('User not authenticated');

    // Fetch user's permissions (must return Permission[])
    const userPermissions: Permission[] = await this.authService.getUserPermissions(userId);

    // Check if user has all required permissions
    const hasPermission = requiredPermissions.every((requiredPerm) => {
      return userPermissions.some((userPerm) => {
        return (
          userPerm.resource === requiredPerm.resource &&
          requiredPerm.actions.every((action) => userPerm.actions.includes(action))
        );
      });
    });

    if (!hasPermission) throw new ForbiddenException('Access denied');

    return true;
  }
}
