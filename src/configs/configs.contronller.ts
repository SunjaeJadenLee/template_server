import { Body, Controller, Get, Post, UploadedFile, UseInterceptors, } from '@nestjs/common';

import { Config } from './configs.entity';
import { ConfigService } from './../config/config.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('config')
export class ConfigController {
    constructor(private readonly configService: ConfigService) {}
}