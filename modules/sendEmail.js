const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_SERVER,
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.GOOGLE_EMAIL_ADDRESS,
    pass: process.env.GOOGLE_MAIL_PASSWORD,
  },
});

const sendEmail = async (victimEmail,subject,message) => {
    try {
        const info = await transporter.sendMail({
            from : "Votely",
            to : victimEmail,
            subject,
            html : message
        })

        console.log("Message sent: %s", info.messageId);
    }catch(error){
        throw new Error(error);
    }
}

module.exports = sendEmail;