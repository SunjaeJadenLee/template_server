import { Module } from "@nestjs/common";
import { Notice } from './notices.entity';
import { NoticeController } from './notices.controller';
import { NoticeService } from './notices.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Notice])],
    controllers:[NoticeController],
    providers: [NoticeService],
    exports: [TypeOrmModule]
})

export class NoticeModule {}