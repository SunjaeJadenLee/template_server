import { BaseEntity } from 'typeorm';
import { User } from 'src/users/users.entity';
export declare class Notice extends BaseEntity {
    noticeID: string;
    title: string;
    content: string;
    user: User;
    likes: number;
    dislikes: number;
    created_date: Date;
    updated_date: Date;
}
