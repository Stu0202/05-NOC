import nodemailer from 'nodemailer'
import { envs } from '../../config/plugin/envs.plugin'
import { Attachment } from 'nodemailer/lib/mailer';

interface sendEmailOptions {
    to: string | string[],
    subject: string,
    htmlBody: string
    attachements?: Attachment[]

}

interface Attachement{
    filename: string,
    path: string
}

// todo: Attachement


export class EmailService {

    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth:{
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY
        }
    });

    async sendEmail(options:sendEmailOptions):Promise<boolean>{
        const {to,subject,htmlBody,attachements =[]} = options

    try {
        const sendInformation = await this.transporter.sendMail({
            to: to,
            subject: subject,
            html: htmlBody,
            attachments:attachements
        })

        console.log(sendInformation)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
    }

    async sendEmailWithFileSystemLogs(to:string | string []){
        const subject = 'Logs del servidor'
        const htmlBody = `
            <h3>Logs de Sistema - NOC</h3>
            <p>Prueba de envio de emails con node y nodemailer</p>
            <p>Ver logs adjuntos</p>
        `
        const attachements:Attachement[]=[
            {filename:'logs-all.log',path:'./logs/logs-all.log'},
            {filename:'logs-medium.log',path:'./logs/logs-medium.log'},
            {filename:'logs-high.log',path:'./logs/logs-high.log'},
        ]
            
        return this.sendEmail({
            to, subject, attachements, htmlBody
        })

    }
    
}