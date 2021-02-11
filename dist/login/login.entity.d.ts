import { BaseEntity } from 'typeorm';
import { User } from 'src/users/users.entity';
export declare class Login extends BaseEntity {
    loginID: number;
    authToken: string;
    user: User;
    last_login: string;
}
