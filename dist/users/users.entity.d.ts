import { BaseEntity } from 'typeorm';
export declare class User extends BaseEntity {
    userID: number;
    password: string;
    email: string;
    name: string;
    profile_img_url: string;
    birth: string;
    mobile: string;
    isAdmin: string;
    created_date: Date;
    updated_date: Date;
    emailToLowerCase(): void;
}
