import { CronService } from "./cron/cron-service"


export class Server{

 public static start(){
        console.log('Server Running...')
        CronService.creteJob(
            '*/5 * * * * *',
            () => {
                
            }
        );
      
    }
}