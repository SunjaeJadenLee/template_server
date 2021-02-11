import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthModule } from "src/auth/auth.module";
import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { S3Service } from './../s3/s3.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from "./users.entity";
import { UserController } from "./users.controller";
import { UserService } from './users.service';

@Module({
    imports: [ConfigModule, MulterModule.registerAsync({ useClass: S3Service,useFactory: async (configService: ConfigService)=>({})}), TypeOrmModule.forFeature([User])],
    controllers:[UserController],
    providers: [UserService],
    exports: [UserService]
})

export class UserModule {}