"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const jwt_guard_1 = require("./jwt-guard");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("./jwt-strategy");
const roles_guard_1 = require("./roles.guard");
const users_entity_1 = require("../users/users.entity");
const users_module_1 = require("./../users/users.module");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [
            common_1.forwardRef(() => users_module_1.UserModule),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    secret: 'Tjswo9411#',
                    signOptions: { expiresIn: '2h' },
                }),
            }),
        ],
        providers: [auth_service_1.AuthService, roles_guard_1.RolesGuard, jwt_strategy_1.JwtStrategy, jwt_guard_1.JwtAuthGuard],
        exports: [auth_service_1.AuthService]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map