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
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const login_entity_1 = require("./login.entity");
const users_entity_1 = require("../users/users.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const auth_service_1 = require("../auth/auth.service");
let LoginService = class LoginService {
    constructor(loginRepository, authService) {
        this.loginRepository = loginRepository;
        this.authService = authService;
        this.loginUser = async (email, password) => {
            let isValidUser = await this.validateUser(email, password);
            if (isValidUser) {
                let token = await this.authService.generateJWT({ email, password });
                await this.saveToken(token, isValidUser);
                return token;
            }
            else {
                return 'is not valid user';
            }
        };
        this.validateUser = async (email, password) => {
            console.log(password);
            let hashPassword = await this.authService.hashPassword(password);
            let user = await this.userRepository.findOne({ email: email });
            console.log(user.password);
            console.log(hashPassword);
            if (user) {
                const isValidPassword = await this.authService.comparePasswords(password, user.password);
                console.log(isValidPassword);
                if (isValidPassword)
                    return user;
            }
            return false;
        };
        this.saveToken = async (token, user) => {
            let foundUser = await this.loginRepository.findOne(user.userID);
            console.log(foundUser);
            if (!foundUser) {
                let login = new login_entity_1.Login();
                login.user = user;
                login.authToken = token;
                console.log('saveToToken');
                await this.loginRepository.save(login);
            }
            else {
                await this.loginRepository.update({ user }, { authToken: token });
            }
        };
    }
};
__decorate([
    typeorm_1.InjectRepository(users_entity_1.User),
    __metadata("design:type", typeorm_2.Repository)
], LoginService.prototype, "userRepository", void 0);
LoginService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(login_entity_1.Login)),
    __metadata("design:paramtypes", [typeorm_2.Repository, auth_service_1.AuthService])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map