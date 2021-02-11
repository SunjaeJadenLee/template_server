import { UserService } from './users.service';
import { Controller, Get, Post, Body, UseInterceptors, UploadedFile, UseGuards,  } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { User } from './users.entity';
import { hasRoles } from 'src/auth/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-guard';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    // @hasRoles('Admin')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get()
    async getAllUsers(): Promise<User>{
        const users = await this.userService.getAllUsers();
        return Object.assign({
            data: users,
            status: 200,
            message: 'SUCCESS'
        })
    }

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    addUser(@Body('data') data: User, @UploadedFile() image){
        console.log(image);
        const {password,email,name,birth,mobile,isAdmin} = data;
    }
}