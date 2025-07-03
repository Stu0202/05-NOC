import { error } from "console";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service"
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { envs } from "../config/plugin/envs.plugin";
import { EmailService } from "./email/email.service";


const fileSystemlogRepository = new LogRepositoryImpl(
    new FileSystemDataSource()
)

export class Server{

 public static start(){
   
        //Mandar email

        const emailService = new EmailService()
        // console.log('Server Running...')
        emailService.sendEmailWithFileSystemLogs([
            'jmreyes7@espe.edu.ec'
        ])


        // CronService.creteJob(
        //     '*/5 * * * * *',
        //     () => {
        //        // new CheckService().execute('https://google.com')
        //        const url = 'https://google.com'
        //         new CheckService(
        //             fileSystemlogRepository,
        //             () => console.log(`${url} is ok` ),
        //             (error) => console.log(error)
        //         ).execute(url)
        //     }
        // );
      
    }
}