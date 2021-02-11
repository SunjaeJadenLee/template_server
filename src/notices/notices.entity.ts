import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { User } from 'src/users/users.entity'

@Entity()
export class Notice extends BaseEntity{
    @PrimaryGeneratedColumn()
    noticeID: string;

    @Column()
    title: string;

    @Column({nullable:false})
    content: string;

    @ManyToOne(type=>User, user => user.userID)
    @JoinColumn({name:`userID`})
    user: User;

    @Column()
    likes: number;
    
    @Column()
    dislikes: number;

    @CreateDateColumn({ name: 'created_date' })
    created_date!: Date;
  
    @UpdateDateColumn({ name: 'updated_date' })
    updated_date!: Date;
}