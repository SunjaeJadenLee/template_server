"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const config_1 = require("@nestjs/config");
const auth_module_1 = require("../auth/auth.module");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const s3_service_1 = require("./../s3/s3.service");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("./users.entity");
const users_controller_1 = require("./users.controller");
const users_service_1 = require("./users.service");
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        imports: [config_1.ConfigModule, platform_express_1.MulterModule.registerAsync({ useClass: s3_service_1.S3Service, useFactory: async (configService) => ({}) }), typeorm_1.TypeOrmModule.forFeature([users_entity_1.User])],
        controllers: [users_controller_1.UserController],
        providers: [users_service_1.UserService],
        exports: [users_service_1.UserService]
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=users.module.js.map