import { LogDataSource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import fs from 'fs'




export class FileSystemDatasource implements LogDataSource{

    private readonly logPath  ='logs/'
    private readonly allLogsPath  ='logs/logs-low.log'
    private readonly mediumLogsPath  ='logs/logs-medium.log'
    private readonly highLogsPath  ='logs/logs-high.log'

    constructor(){

    }


    private createLogsfile =() => {

    }

    save(log: LogEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }



    getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        throw new Error("Method not implemented.");
    }

}