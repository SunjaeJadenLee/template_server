import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Config extends BaseEntity {
    @PrimaryGeneratedColumn()
    configID: number;

    @Column()
    config_key: string;
    
    @Column()
    config_value: string;

    @CreateDateColumn({ name: 'created_date' })
    created_date!: Date;
  
    @UpdateDateColumn({ name: 'updated_date' })
    updated_date!: Date;
}