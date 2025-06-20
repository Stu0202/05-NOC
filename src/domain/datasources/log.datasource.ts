//clase abstracta para no crear instancias de nuestro Datasource

import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

export abstract class LogDatasource{ 

    abstract saveLogs(log: LogEntity):Promise<void>
    abstract getLogs(severityLevel: LogSeverityLevel ):Promise<LogEntity[]>
}