import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'
// import { ConfigModule } from './config/config.module';
import { ConfigsModule } from './configs/configs.module';
import { LoginModule } from './login/login.module'
import { Module } from '@nestjs/common';
import { NoticeModule } from './notices/notices.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './users/users.module';
import dbConfig from './util/dbConfig'

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),UserModule, NoticeModule, LoginModule, ConfigsModule, TypeOrmModule.forRoot(dbConfig)],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
