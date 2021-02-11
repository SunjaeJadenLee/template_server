import { Injectable } from "@nestjs/common";
import { User } from './users.entity'
import moment from 'moment'
import { v4 } from 'uuid';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>,){}
    private authService: AuthService;

    getAllUsers(): Promise<User[]> {
        return this.userRepository.find();
    }

    searchUsers(key: string,value: string): Promise<User[]> {
        return this.userRepository.find({[key]:value})
    }

    async insertUser(user: User): Promise<User>{
        const hashPassword = await this.authService.hashPassword(user.password);
        const userID = v4().substring(0,10).replace('-','');
        const newUser = user;
        newUser.password = hashPassword;
        newUser.userID = userID;

        // const newUser = new User(userID,profile_img_url,email,password,name,birth,mobile,isAdmin,newDate,newDate);
        await this.userRepository.save(newUser);
        return newUser;
    }

    async deleteUser(userID: number): Promise<void> {
        await this.userRepository.delete({ userID: userID });
      }
}