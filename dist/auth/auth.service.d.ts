import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    generateJWT(payload: object): Promise<string>;
    hashPassword(password: string): Promise<string>;
    comparePasswords(newPassword: string, passwordHash: string): Promise<any | boolean>;
    verifyToken(token: string): Promise<string>;
}
