import nodemailer from "nodemailer";

const sendMail = async (req, res) => {
    try {
        const { email, subject, message, name } = req.body;

        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
          }
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: name || 'Portfolio Message',
            html: `<!DOCTYPE html>
            <html>
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>${name} - Portfolio Message</title>
              <style>
                @media only screen and (max-width: 600px) {
                  .container {
                    width: 100% !important;
                    padding: 10px !important;
                  }
                }
              </style>
            </head>
            <body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; color: #333; line-height: 1.6;">
              <div style="max-width: 650px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
                
                <div style="text-align: center; margin-bottom: 20px;">
                  <h1 style="color: #2a52be; font-size: 24px; margin-bottom: 10px;">Hello ${name},</h1>
                  <p style="font-size: 16px; margin: 0;">I've received your message from my portfolio website.</p>
                </div>
                
                <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
                  <p style="margin: 0; font-style: italic;">"${message.replace(/"/g, '&quot;')}"</p>
                </div>
                
                <p style="margin-bottom: 15px;">I'll get back to you as soon as possible. If your request is urgent, please reply to this email to notify me.</p>
                
                <p style="margin-bottom: 20px;">Thank you for reaching out!</p>
                
                <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #e0e0e0;">
                  <p style="margin: 5px 0;"><strong>Best regards,</strong></p>
                  <p style="margin: 5px 0; font-size: 16px; color: #2a52be;">Omar Hajiyev</p>
                  <p style="margin: 5px 0;">Full Stack Developer</p>
                  <p style="margin: 5px 0;"> 
                    <a href="https://linkedin.com/in/omar-hajiyev-o4" style="color: #2a52be; text-decoration: none;">LinkedIn</a> | 
                    <a href="mailto:${process.env.EMAIL_USER}" style="color: #2a52be; text-decoration: none;">${process.env.EMAIL_USER}</a>
                  </p>
                </div>
                
                <div style="margin-top: 20px; font-size: 12px; color: #777; text-align: center;">
                  <p>This is an automated response. Please reply to this email to contact me directly.</p>
                </div>
              </div>
            </body>
            </html>`,
              
              text: `Hello ${name},
            
            I've received your message from my portfolio website.
            
            Your message:
            "${message.replace(/"/g, '')}"
            
            I'll get back to you as soon as possible. If your request is urgent, please reply to this email to notify me.
            
            Thank you for reaching out!
            
            Best regards,
            Omar Hajiyev
            Full Stack Developer
            LinkedIn: https://linkedin.com/in/omar-hajiyev-o4
            Email: ${process.env.EMAIL_USER}
            
            This is an automated response. Please reply to this email to contact me directly.`
        });

        //mail is reply.
        replyMail(name, email, subject, message);

        res.status(200).json({ messageType: 'success', message: 'Your application has been sent successfully!' });
    } catch (error) {
        res.status(500).json({ messageType: 'error', message: 'Email not send' });
    }
}

const replyMail = async (name, email, subject, message) => {
    try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
          }
        }); 
        
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: subject,
            html: `<!DOCTYPE html>
            <html>
            <head>
            <meta charset="UTF-8">
            <title>${subject}</title>
            <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
                .container { max-width: 650px; margin: 0 auto; padding: 25px; background-color: #f8f9fa; border-radius: 8px; border: 1px solid #e0e0e0; }
                .header { text-align: center; margin-bottom: 20px; }
                .content { background-color: white; padding: 20px; border-radius: 6px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
            </style>
            </head>
            <body>
            <div class="container">
                <div class="header">
                <h2 style="color: #2c3e50; margin-bottom: 5px;">Müraciət | ${name}</h2>
                </div>
                
                <div class="content">
                <h3 style="color: #2c3e50; margin-top: 0; border-bottom: 1px solid #eee; padding-bottom: 10px;">Mesaj Təfərrüatları</h3>
                
                <p style="margin: 10px 0;"><strong>Ad Soyad:</strong> ${name}</p>
                <p style="margin: 10px 0;"><strong>E-posta:</strong> <a href="mailto:${email}" style="color: #3498db; text-decoration: none;">${email}</a></p>
                <p style="margin: 10px 0;"><strong>Mövzu başlığı:</strong> ${subject}</p>
                
                <div style="margin: 15px 0; padding: 12px; background-color: #f5f5f5; border-left: 3px solid #3498db;">
                    <p style="margin: 0; font-style: italic;">${message}</p>
                </div>
                
                <p style="margin: 10px 0; font-size: 14px; color: #7f8c8d;">
                    <strong>Göndərmə vaxtı:</strong> ${new Date().toLocaleString('az-AZ')}
                </p>
                </div>
            </div>
            </body>
            </html>`,
            text: `Müraciət: ${name}\nE-posta: ${email}\nMövzu: ${subject}\n\n${message}`
        });
        
    } catch (error) {
        console.log('Email-e cavab göndərilmədi');
    }
}

export { sendMail }