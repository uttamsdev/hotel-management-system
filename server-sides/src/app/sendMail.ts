import nodemailer from 'nodemailer'
import config from './config';
const transporter = nodemailer.createTransport({
    host: "mail.uttamsaha.com",
    port: 465,
    // secure: false,
    auth: {
      user: "mail@uttamsaha.com",
      pass: config.password
    },
    // tls: { rejectUnauthorized: false }  
  });

  export default transporter;