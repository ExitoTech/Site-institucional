function send(){

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.umbler.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "g2emailsender@gmail.com",
        pass: "abaaba12"
    },
    tls: { rejectUnauthorized: false }
  });

  const mailOptions = {
    from: 'no-reply@diegopinho.com',
    to: 'destinatario@yahoo.com',
    subject: 'E-mail enviado usando Node!',
    text: 'Bem fácil, não? ;)'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.response);
    }
  });

}