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
exports.LoginController = void 0;
const common_1 = require("@nestjs/common");
const users_entity_1 = require("../users/users.entity");
const login_service_1 = require("./login.service");
let LoginController = class LoginController {
    constructor(loginService) {
        this.loginService = loginService;
    }
    testGet() {
        console.log('get test auth login');
    }
    async loginUser(email, password) {
        console.log(email, password);
        console.log(await this.loginService.loginUser(email, password));
    }
};
__decorate([
    common_1.Get('login'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "testGet", null);
__decorate([
    common_1.Post('login'),
    __param(0, common_1.Body('email')), __param(1, common_1.Body('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "loginUser", null);
LoginController = __decorate([
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], LoginController);
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map