import { Config } from './configs.entity';
import { Repository } from "typeorm";
export declare class ConfigService {
    private configRepository;
    constructor(configRepository: Repository<Config>);
}
