import { ConfigModule, ConfigService } from '@nestjs/config';
// import { Login } from './login.entity';
// import { LoginController } from './login.controller';
import { Module, forwardRef } from "@nestjs/common";

import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-guard';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt-strategy';
import { RolesGuard } from './roles.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';
import { UserModule } from './../users/users.module';

@Module({
    imports: [
        forwardRef(()=>UserModule),
        JwtModule.registerAsync({
        imports:[ ConfigModule ],
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => ({
            secret: 'Tjswo9411#',
            signOptions: {expiresIn: '2h'},
        }),
    }),],
    providers: [AuthService, RolesGuard, JwtStrategy, JwtAuthGuard],
    exports: [AuthService]
})

export class AuthModule {}