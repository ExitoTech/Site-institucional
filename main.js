
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port:  587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "vinicius.teste992@outlook.com",
        pass: "12345678aa"
    }
  });

transporter.sendMail({
 from:"vini <vinicius.teste992@outlook.com>",
 to:"vinicius.s8u@gmail.com",
 subject:"Domou",
 text:"Work as a charm",
 html:"Work as a charm"
 }).then(message =>{
  console.log(message);
 }).catch(err =>{
  console.log(err);
 })
  
