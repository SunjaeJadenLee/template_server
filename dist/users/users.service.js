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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const users_entity_1 = require("./users.entity");
const uuid_1 = require("uuid");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const auth_service_1 = require("../auth/auth.service");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    getAllUsers() {
        return this.userRepository.find();
    }
    searchUsers(key, value) {
        return this.userRepository.find({ [key]: value });
    }
    async insertUser(user) {
        const hashPassword = await this.authService.hashPassword(user.password);
        const userID = uuid_1.v4().substring(0, 10).replace('-', '');
        const newUser = user;
        newUser.password = hashPassword;
        newUser.userID = userID;
        await this.userRepository.save(newUser);
        return newUser;
    }
    async deleteUser(userID) {
        await this.userRepository.delete({ userID: userID });
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=users.service.js.map