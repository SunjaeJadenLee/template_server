import { MulterModuleOptions, MulterOptionsFactory } from "@nestjs/platform-express";
import { ConfigService } from '@nestjs/config';
export declare class S3Service implements MulterOptionsFactory {
    private readonly configService;
    private s3;
    private readonly FILE_LIMIT_SIZE;
    constructor(configService: ConfigService);
    createMulterOptions(): MulterModuleOptions | Promise<MulterModuleOptions>;
}
