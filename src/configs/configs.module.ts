import { Config } from './configs.entity';
import { ConfigController } from './configs.contronller';
import { ConfigService } from './configs.service';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Config])],
    controllers:[ConfigController],
    providers: [ConfigService],
    exports: [TypeOrmModule]
})

export class ConfigsModule {}