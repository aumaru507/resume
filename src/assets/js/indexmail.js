console.log('I like %s but I do not like %s.', 'react' , 'vue')

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'audeveloper507@gmail.com',
    pass: 'bjlbeahqytgzcwpo'
  }
});

var mailOptions = {
  from: 'audeveloper507@gmail.com',
  to: "setthanan507@gmail.com",
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
