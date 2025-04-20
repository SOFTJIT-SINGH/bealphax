import nodemailer from 'nodemailer'

export const sendEmail = async ({ email, emailType, userId }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: true, // true for port 465, true for other ports
      auth: {
        user: 'maddison53@ethereal.email',
        pass: 'jn7jnAPss4f63QBp6D',
      },
    })

    const mailOptions = {
      from: '"BE SOFT 👻" <besofttech8@gmail.com>', // sender address
      to: email, // list of receivers
      subject: emailType === 'VERIFY' ? 'VERIFY UR EMAIL' : 'RESET UR PASSWORD', // Subject line
      //   text: 'Hello world?', // plain text body
      html: '<b>Hello world?</b>',
    }

    const mailResponse = await transporter.sendMail(mailOptions)
    return mailResponse
  } catch (error) {
    throw new Error(error.message)
  }
}
