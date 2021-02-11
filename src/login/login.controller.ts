import { Body, Controller, Get, Post, UploadedFile, UseInterceptors, } from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';
import { User } from 'src/users/users.entity';
import { Login } from './login.entity';
import { LoginService } from './login.service';

@Controller('auth')
export class LoginController {
    constructor(private readonly loginService: LoginService) {}

    @Get('login')
    testGet(){
        console.log('get test auth login')
    }

    @Post('login')
    async loginUser(@Body('email') email: string, @Body('password') password: string){
        console.log(email,password);
        console.log(await this.loginService.loginUser(email,password))
    }
}