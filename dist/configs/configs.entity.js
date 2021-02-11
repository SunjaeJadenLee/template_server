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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const typeorm_1 = require("typeorm");
let Config = class Config extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Config.prototype, "configID", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Config.prototype, "config_key", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Config.prototype, "config_value", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ name: 'created_date' }),
    __metadata("design:type", Date)
], Config.prototype, "created_date", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ name: 'updated_date' }),
    __metadata("design:type", Date)
], Config.prototype, "updated_date", void 0);
Config = __decorate([
    typeorm_1.Entity()
], Config);
exports.Config = Config;
//# sourceMappingURL=configs.entity.js.map