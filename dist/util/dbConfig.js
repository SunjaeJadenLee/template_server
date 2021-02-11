"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const notices_entity_1 = require("../notices/notices.entity");
dotenv.config();
const config = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    database: 'template',
    password: 'Tjswo9411#',
    synchronize: true,
    autoLoadEntities: true,
    entities: [
        `${__dirname}/**/*.entity.ts`
    ],
};
exports.default = config;
//# sourceMappingURL=dbConfig.js.map