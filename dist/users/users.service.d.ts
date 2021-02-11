import { User } from './users.entity';
import { Repository } from "typeorm";
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    private authService;
    getAllUsers(): Promise<User[]>;
    searchUsers(key: string, value: string): Promise<User[]>;
    insertUser(user: User): Promise<User>;
    deleteUser(userID: number): Promise<void>;
}
