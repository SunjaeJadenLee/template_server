import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { UserService } from "src/users/users.service";
export declare class RolesGuard implements CanActivate {
    private reflctor;
    private userService;
    constructor(reflctor: Reflector, userService: UserService);
    canActivate(context: ExecutionContext): boolean;
}
