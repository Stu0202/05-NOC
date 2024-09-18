import { log } from "util";
import { LogDataSource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import fs from 'fs'




export class FileSystemDatasource implements LogDataSource {

    private readonly logPath = 'logs/'
    private readonly allLogsPath = 'logs/logs-all.log'
    private readonly mediumLogsPath = 'logs/logs-medium.log'
    private readonly highLogsPath = 'logs/logs-high.log'

    constructor() {
        this.createLogsfiles()
    }


    private createLogsfiles = () => {
        if (!fs.existsSync(this.logPath)) {
            fs.mkdirSync(this.logPath)
        }


        [
            this.allLogsPath,
            this.mediumLogsPath,
            this.highLogsPath
        ].forEach(path => {
            if (!fs.existsSync(path)) {
                fs.writeFileSync(path, '');
            }
        });

    }

    async save(newLog: LogEntity): Promise<void> {
        const logAsJson ='${JSON.stringify(newLog)}\n'


        fs.appendFileSync(this.allLogsPath, logAsJson)

        if(newLog.level === LogSeverityLevel.low) return;

        if(newLog.level === LogSeverityLevel.medium){

        fs.appendFileSync(this.mediumLogsPath,logAsJson)
        
        }else{
            
            fs.appendFileSync(this.highLogsPath, logAsJson)

        }




    }



    getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        throw new Error("Method not implemented.");
    }

}