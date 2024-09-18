
import { LogEntity, LogSeverityLevel } from '../entities/log.entity'

export abstract class LogDataSource{

    abstract save(log: LogEntity): Promise<void>
    abstract getLogs(severityLevel:LogSeverityLevel): Promise<LogEntity[]>
}
    