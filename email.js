var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vanessaigwe1@gmail.com',
    pass: 'imncykcenmklxvtg'
  }
});

var mailOptions = {
  from: 'vanessaigwe1@gmail.com',
  to: 'promisefru1@gmail.com, nessakristo@gmail.com',
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