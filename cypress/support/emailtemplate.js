
const nodemailer = require('nodemailer');
const envVariables = require('../../cypress.env.json');
const toemail=envVariables.toemail
const emailOnSuccess =envVariables.emailOnSuccess
const authemail=envVariables.authemail
const authpassword=envVariables.authpassword

const transport = nodemailer.createTransport({

    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: authemail,
      pass: authpassword

      
    },
  
  });
  
  var Options = {
  
    to: toemail,
    subject: "Cypress Test Started",
    html: "Hi Team, <br><br>Cypress Test has been started <br><br>Thanks, <br>QB Automation Team",
  }
  
  transport.sendMail(Options,(error, info) => {
  
    if (error) {
  
      return console.log(error);
    }
  });


 module.exports = { transport, toemail , emailOnSuccess };
  