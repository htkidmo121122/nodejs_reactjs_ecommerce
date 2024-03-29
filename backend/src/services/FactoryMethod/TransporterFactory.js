// transporterFactory.js

const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config()
class TransporterFactory {
    static createTransporter() {
        // Code để cấu hình và tạo transporter ở đây
        return nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.MAIL_ACCOUNT,
                pass: process.env.MAIL_PASSWORD,
            },
        });
    }
}

module.exports = TransporterFactory;
