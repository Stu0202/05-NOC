import { error } from "console";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service"
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { envs } from "../config/plugin/envs.plugin";
import { EmailService } from "./email/email.service";
import { sendEmailLogs } from "../domain/use-cases/logsDirectory/email/send-email-logs";
import { MongoDataSource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresLogDataSource } from "../infrastructure/datasources/postgres-log.datasource";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";


const fsLogRepository = new LogRepositoryImpl(
    new FileSystemDataSource()
)
const mongoLogRepository = new LogRepositoryImpl(
   
    new MongoDataSource()
    
)
const postgresLogRepository = new LogRepositoryImpl(
    new PostgresLogDataSource()
)

export class Server{

 public static start(){
   
        //Mandar email

        // const emailService = new EmailService()

        // new sendEmailLogs(
        //     emailService,
        //     fileSystemlogRepository
        // ).execute(
        //     ['jmreyes7@espe.edu.ec']
        // )

        // console.log('Server Running...')
        // emailService.sendEmailWithFileSystemLogs([
        //     'jmreyes7@espe.edu.ec'
        // ])


         CronService.creteJob(
            '*/5 * * * * *',
             () => {
                // new CheckService().execute('https://google.com')
                const url = 'https://google.com'
                 new CheckServiceMultiple(
                     [fsLogRepository,mongoLogRepository,mongoLogRepository],
                     () => console.log(`${url} is ok` ),
                     (error) => console.log(error)
                 ).execute(url)
             }
         );
      
    }
}