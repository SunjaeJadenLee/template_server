import * as dotenv from 'dotenv'

import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:true});
  await app.listen(5000);
  console.log(`port 5000 connected!!`)
}
bootstrap();
