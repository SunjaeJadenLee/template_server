import { Injectable } from "@nestjs/common";
import { Notice } from './notices.entity'
import moment from 'moment'
import { v4 } from 'uuid';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class NoticeService {
    constructor(@InjectRepository(Notice) private noticeRepository: Repository<Notice>,){}
    
}