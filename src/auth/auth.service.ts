import * as bcrypt from 'bcrypt'

import { Observable, from, of } from "rxjs";

import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Repository } from "typeorm";
import { User } from "src/users/users.entity";
import moment from 'moment'
import { v4 } from 'uuid';

@Injectable()
export class AuthService {
    // @InjectRepository(User) private userRepository: Repository<User>
    constructor(private readonly jwtService: JwtService){
        
    }

    generateJWT(payload: object): Promise<string> {
        return this.jwtService.signAsync({...payload})
    }

    hashPassword(password: string): Promise<string> { 
        return bcrypt.hash(password, 12)
    }

    comparePasswords(newPassword: string, passwordHash: string): Promise<any | boolean> {
        return bcrypt.compare(newPassword,passwordHash)
    }

    verifyToken(token: string): Promise<string>{
        return this.jwtService.verify(token,{secret:'Tjswo9411#'})
    }
}