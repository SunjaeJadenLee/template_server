import { LoginService } from './login.service';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    testGet(): void;
    loginUser(email: string, password: string): Promise<void>;
}
