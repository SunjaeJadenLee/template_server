import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthModule } from 'src/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { Login } from './login.entity';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Login,User]),AuthModule,ConfigModule.forRoot()],
    controllers:[LoginController],
    providers: [LoginService],
    exports: [TypeOrmModule]
})

export class LoginModule {}