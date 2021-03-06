"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const configs_module_1 = require("./configs/configs.module");
const login_module_1 = require("./login/login.module");
const common_1 = require("@nestjs/common");
const notices_module_1 = require("./notices/notices.module");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const dbConfig_1 = require("./util/dbConfig");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [config_1.ConfigModule.forRoot({ isGlobal: true }), users_module_1.UserModule, notices_module_1.NoticeModule, login_module_1.LoginModule, configs_module_1.ConfigsModule, typeorm_1.TypeOrmModule.forRoot(dbConfig_1.default)],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map