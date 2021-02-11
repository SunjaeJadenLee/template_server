import { Injectable } from "@nestjs/common";
import { Login } from './login.entity'
import { User } from "src/users/users.entity";
import moment from 'moment'
import { v4 } from 'uuid';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class LoginService {
    @InjectRepository(User) private userRepository: Repository<User>
    constructor(@InjectRepository(Login) private loginRepository: Repository<Login>,private authService: AuthService){}

    loginUser = async (email: string,password: string): Promise<string> => {
        let isValidUser = await this.validateUser(email,password);
        if(isValidUser){
            let token = await this.authService.generateJWT({email,password});
            await this.saveToken(token,isValidUser)
            return token
        } else {
            return 'is not valid user'
        }
    }

    validateUser = async (email,password) => {
        console.log(password);
        let hashPassword = await this.authService.hashPassword(password);
        let user = await this.userRepository.findOne({email:email});
        console.log(user.password);
        console.log(hashPassword);
        if(user){
            const isValidPassword = await this.authService.comparePasswords(password, user.password)
            console.log(isValidPassword);
            if(isValidPassword) return user
        }

        return false
    }

    saveToken = async (token : string, user : User) => {
        let foundUser = await this.loginRepository.findOne(user.userID);
        console.log(foundUser)
        if(!foundUser){
            let login = new Login();
            login.user = user;
            login.authToken = token;
            console.log('saveToToken')
            await this.loginRepository.save(login);
        } else {
            await this.loginRepository.update({user},{authToken: token})
        }
    }
}