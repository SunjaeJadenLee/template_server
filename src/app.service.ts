import { ConfigService } from './config/config.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly configService: ConfigService
  getPort(): string {
    return this.configService.getString('PORT');
  }

  getHello(): string {
    return 'Hello World!';
  }
}
