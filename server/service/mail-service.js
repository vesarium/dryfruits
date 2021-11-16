const nodemailer = require('nodemailer')

class MailService{

    constructor(){
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth:{
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }
    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: '"Vesarium OÜ"' + process.env.SMTP_USER,
            to,
            subject: 'Account activation',
            //subject: 'Account activation for ' + process.env.API_URL,
            text: '',
            html:
            `
                <div>
                    <h1>Click the link for activation</h1>
                    <a href="${link}">Activation Link</>
                </div>   
            `
        })
    }
}

module.exports = new MailService();