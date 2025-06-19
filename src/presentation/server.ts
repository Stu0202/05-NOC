import {CronJob} from 'cron'

export class Server{

 public static start(){
        console.log('Server Running...')

        const job = new CronJob(
	'*/10  * * * * *', // cronTime  second, minute, hour, day of month, month
	function () {
		console.log('You will see this message every 2 second');
	}, // onTick
	null, // onComplete
	true, // start
	'America/Los_Angeles' // timeZone
);
// job.start() is optional here because of the fourth parameter set to tru
    }
}