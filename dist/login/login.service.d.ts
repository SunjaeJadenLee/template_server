import { Login } from './login.entity';
import { User } from "src/users/users.entity";
import { Repository } from "typeorm";
import { AuthService } from "src/auth/auth.service";
export declare class LoginService {
    private loginRepository;
    private authService;
    private userRepository;
    constructor(loginRepository: Repository<Login>, authService: AuthService);
    loginUser: (email: string, password: string) => Promise<string>;
    validateUser: (email: any, password: any) => Promise<false | User>;
    saveToken: (token: string, user: User) => Promise<void>;
}
