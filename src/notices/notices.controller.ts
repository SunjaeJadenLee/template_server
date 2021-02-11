import { Body, Controller, Get, Post, UploadedFile, UseInterceptors, } from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';
import { Notice } from './notices.entity';
import { NoticeService } from './notices.service';

@Controller('notice')
export class NoticeController {
    constructor(private readonly noticeService: NoticeService) {}
}