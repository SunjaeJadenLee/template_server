import { Config } from './configs.entity';
import { Injectable } from "@nestjs/common";
import moment from 'moment'
import { v4 } from 'uuid';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class ConfigService {
    constructor(@InjectRepository(Config) private configRepository: Repository<Config>,){}

}