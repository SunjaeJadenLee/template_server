import { CanActivate, ExecutionContext, forwardRef, Inject, Injectable } from "@nestjs/common";

import { AuthService } from 'src/auth/auth.service';
import { Reflector } from "@nestjs/core";
import { UserService } from "src/users/users.service";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflctor: Reflector, 
        @Inject(forwardRef(()=> UserService))
        private userService :UserService) {}

    canActivate(context: ExecutionContext): boolean{
        const roles = this.reflctor.get<string[]>('roles', context.getHandler());
        if(!roles) return true;

        const request = context.switchToHttp().getRequest();
        const user = request.user;
        return true;
    }
}