import * as dotenv from 'dotenv';
import * as fs from 'fs';

import { Injectable } from "@nestjs/common";

dotenv.config();

@Injectable()
export class ConfigService {
    public readonly envConfig: { [key: string]: string };

    constructor() {
        this.envConfig = process.env;
    }

    getAny(key: string) {
        return this.envConfig[key];
    }

    getString(key: string): string {
        return this.envConfig[key];
    }

    getNumber(key: string): number {
        return Number(this.envConfig[key]);
    }

    getBoolean(key: string): boolean {
        return Boolean(this.envConfig[key]);
    }
}