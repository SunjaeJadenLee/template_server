import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Board {
    @PrimaryGeneratedColumn()
    boardID: string;

    @Column()
    password: string;

    @Column({nullable:false})
    email: string;

    @Column({nullable:false})
    name: string;

    @Column()
    profile_img_url: string;
    
    @Column()
    birth: string;

    @Column()
    mobile: string;
    
    @Column()
    isAdmin: string;
    
    @Column()
    created_date: string;
    
    @Column()
    updated_date: string;
}