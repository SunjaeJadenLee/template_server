import { Notice } from './notices.entity';
import { Repository } from "typeorm";
export declare class NoticeService {
    private noticeRepository;
    constructor(noticeRepository: Repository<Notice>);
}
