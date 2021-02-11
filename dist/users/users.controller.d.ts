import { UserService } from './users.service';
import { User } from './users.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<User>;
    addUser(data: User, image: any): void;
}
