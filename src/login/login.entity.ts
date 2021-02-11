import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { User } from 'src/users/users.entity';

@Entity()
export class Login extends BaseEntity {
    @PrimaryGeneratedColumn()
    loginID: number;

    @Column()
    authToken: string;

    @OneToOne(type => User,user => user.userID)
    @JoinColumn({name:'userID'})
    user:User;


    @UpdateDateColumn({ name: 'last_login' })
    last_login: string;
}