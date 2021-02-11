"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const core_1 = require("@nestjs/core");
const users_service_1 = require("../users/users.service");
let RolesGuard = class RolesGuard {
    constructor(reflctor, userService) {
        this.reflctor = reflctor;
        this.userService = userService;
    }
    canActivate(context) {
        const roles = this.reflctor.get('roles', context.getHandler());
        if (!roles)
            return true;
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        return true;
    }
};
RolesGuard = __decorate([
    common_1.Injectable(),
    __param(1, common_1.Inject(common_1.forwardRef(() => users_service_1.UserService))),
    __metadata("design:paramtypes", [core_1.Reflector,
        users_service_1.UserService])
], RolesGuard);
exports.RolesGuard = RolesGuard;
//# sourceMappingURL=roles.guard.js.map