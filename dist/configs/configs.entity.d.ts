import { BaseEntity } from 'typeorm';
export declare class Config extends BaseEntity {
    configID: number;
    config_key: string;
    config_value: string;
    created_date: Date;
    updated_date: Date;
}
