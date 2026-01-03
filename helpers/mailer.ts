import nodemailer from 'nodemailer';

// 1. Define the interface for the function arguments
interface SendEmailParams {
  email: string;
  emailType: "VERIFY" | "RESET"; // Or just 'string' if you prefer strictness
  userId: string;
}

// 2. Apply the type to the function parameter
export const sendEmail = async ({ email, emailType, userId }: SendEmailParams) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'maddison53@ethereal.email',
        pass: 'jn7jnAPss4f63QBp6D'
      }
    });

    const mailOptions = {
      from: 'hitesh@gmail.com',
      to: email,
      subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${userId}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}</p>`
    }

    const mailresponse = await transporter.sendMail(mailOptions);
    return mailresponse;

  } catch (error: any) {
    throw new Error(error.message);
  }
}