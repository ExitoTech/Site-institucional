function send() {
  
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "vinicius.teste992@outlook.com",
    pass: "12345678aa"
  }
});


  var xpto = emailUser.value;
  transporter.sendMail({
    from: "vini <vinicius.teste992@outlook.com>",
    to: xpto,
    subject: "Domou",
    text: "Vi que voce tem interesse",
    html: "Vem cmg!"
  }).then(message => {
    console.log(message);
  }).catch(err => {
    console.log(err);
  })
}




