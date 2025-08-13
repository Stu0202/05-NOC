import 'dotenv/config'
import {envs} from './config/plugin/envs.plugin'
import { MongoDataBase } from './data/mongo';
import { Server } from "./presentation/server";


(async()=>{
    main()
})();

async function main(){

    await MongoDataBase.connect({mongoUrl: envs.MONGO_URL, dbName: envs.MONGO_DB_NAME});

    //Server.start()
  
}

