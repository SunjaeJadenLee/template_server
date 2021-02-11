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
exports.Notice = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = require("../users/users.entity");
let Notice = class Notice extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", String)
], Notice.prototype, "noticeID", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Notice.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Notice.prototype, "content", void 0);
__decorate([
    typeorm_1.ManyToOne(type => users_entity_1.User, user => user.userID),
    typeorm_1.JoinColumn({ name: `userID` }),
    __metadata("design:type", users_entity_1.User)
], Notice.prototype, "user", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Notice.prototype, "likes", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Notice.prototype, "dislikes", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ name: 'created_date' }),
    __metadata("design:type", Date)
], Notice.prototype, "created_date", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ name: 'updated_date' }),
    __metadata("design:type", Date)
], Notice.prototype, "updated_date", void 0);
Notice = __decorate([
    typeorm_1.Entity()
], Notice);
exports.Notice = Notice;
//# sourceMappingURL=notices.entity.js.map