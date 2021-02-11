import * as AWS from 'aws-sdk';
import * as MulterS3 from 'multer-s3';

import { Inject, Injectable } from "@nestjs/common";
import { MulterModuleOptions, MulterOptionsFactory } from "@nestjs/platform-express";

// import { ConfigService } from './../config/config.service';
import { ConfigService } from '@nestjs/config'

@Injectable()
export class S3Service implements MulterOptionsFactory {
    private s3: any;
    private readonly FILE_LIMIT_SIZE = 3145728;
    // private configService: ConfigService
    constructor(private readonly configService: ConfigService){
        this.s3 = new AWS.S3();
        AWS.config.update({
            accessKeyId:this.configService.get('AWSACCESSKEYID'), 
            // this.configService.getString('AWSACCESSKEYID'),
            secretAccessKey: this.configService.get('AWSSECRETKEY')
            // secretAccessKey: this.configService.getString('AWSSECRETKEY')
        })
    }

    createMulterOptions(): MulterModuleOptions | Promise<MulterModuleOptions> {
        // const bucket: string = this.configService.getString('BUCKET_NAME');
        const bucket: string = this.configService.get('BUCKET_NAME')
        const acl: string = 'public-read';

        const multerS3Storage = MulterS3({
            s3: this.s3,
            bucket: bucket,
            acl,
            key:function(req,file,cb){
                cb(null, Math.floor(Math.random() * 1000).toString() + Date.now() + '.' + file.originalname.split('.').pop());
            },
        })

        return {
            storage: multerS3Storage,
            limits: {
                fieldSize: this.FILE_LIMIT_SIZE
            }

        }
    }

//     public fileFilter(req: Express.Request, file: Express., cb: (error: Error | null,accepFile: boolean)=>void){
//         if(file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
//             cb(null, true);
//         } else {
//             cb(new Error('unsupported file type'),false)
//         }
//     }
}