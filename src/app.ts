import 'dotenv/config'
import {envs} from './config/plugin/envs.plugin'
import { LogModel, MongoDataBase } from './data/mongo';
import { Server } from "./presentation/server";


(async()=>{
    main()
})();

async function main(){

     await MongoDataBase.connect({mongoUrl: envs.MONGO_URL, dbName: envs.MONGO_DB_NAME});

    // //Crear una colección = tabla, documento = registro
    // const newLog = await LogModel.create({
    //     message: 'Test message from Mongo',
    //     origin: 'App.ts',
    //     level: 'low'
    // })

    // await newLog.save()
    
    // console.log(newLog)

    //leer colecciones
    // const logs = await LogModel.find()
    // console.log(logs)


    Server.start()
  
}

