import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    userID: number;

    @Column()
    password: string;

    @Column({nullable:false})
    email: string;

    @Column({nullable:false})
    name: string;

    @Column({nullable:true})
    profile_img_url: string;
    
    @Column({nullable:true})
    birth: string;

    @Column({nullable:true})
    mobile: string;
    
    @Column({nullable:true})
    isAdmin: string;
    
    @CreateDateColumn({ name: 'created_date' })
    created_date!: Date;
  
    @UpdateDateColumn({ name: 'updated_date' })
    updated_date!: Date;

    @BeforeInsert()
    emailToLowerCase() {
        this.email = this.email.toLowerCase();
    }
}