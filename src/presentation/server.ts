import { error } from "console";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service"
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";


const fileSystemlogRepository = new LogRepositoryImpl(
    new FileSystemDataSource()
)

export class Server{

 public static start(){
        console.log('Server Running...')
        CronService.creteJob(
            '*/5 * * * * *',
            () => {
               // new CheckService().execute('https://google.com')
               const url = 'http://localhost:3000'
                new CheckService(
                    fileSystemlogRepository,
                    () => console.log(`${url} is ok` ),
                    (error) => console.log(error)
                ).execute(url)
            }
        );
      
    }
}