const nodemailer = require("nodemailer");

module.exports.sendMail = async (to, subject, html) => {
  let transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  });
  let info = await transport.sendMail({
    from: process.env.SMTP_EMAIL,
    to: email,
    subject: subject,
    html: html
  });

  return info;
};
