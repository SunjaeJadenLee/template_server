import * as dotenv from 'dotenv';

import { Login } from './../login/login.entity';
import { Notice } from 'src/notices/notices.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../users/users.entity'

dotenv.config();
 
const config: TypeOrmModuleOptions = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    database: 'template',
    password: 'Tjswo9411#',
    synchronize:true,
    autoLoadEntities:true,
    entities: [
        `${__dirname}/**/*.entity.ts`
    ],
}

export default config