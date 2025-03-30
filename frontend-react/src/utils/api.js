// const nodemailer = require('nodemailer');
// const { format } = require('date-fns');

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'omerhajiyevo4@gmail.com',
//     pass: 'gfrr mneh pgos ruyy',
//   },
// });

const sendMessage = async (name, email, subject, message) => {
  // const mailOptions = {
  //   from: email,
  //   to: 'omarhajiyevo4@gmail.com',
  //   subject: `<p style="color: #7f8c8d; font-size: 14px;">${subject}</p>`,
  //   text:  `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 0 auto; padding: 25px; background-color: #f8f9fa; border-radius: 8px; border: 1px solid #e0e0e0;">
  //               <div style="text-align: center; margin-bottom: 20px;">
  //                   <h2 style="color: #2c3e50; margin-bottom: 5px;">Müraciət | ${name}</h2>
  //               </div>
                
  //               <div style="background-color: white; padding: 20px; border-radius: 6px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
  //                   <h3 style="color: #2c3e50; margin-top: 0; border-bottom: 1px solid #eee; padding-bottom: 10px;">Mesaj Təfərrüatları</h3>
                    
  //                   <p style="margin: 10px 0;"><strong>Ad Soyad:</strong> ${name}</p>
  //                   <p style="margin: 10px 0;"><strong>E-posta:</strong> <a href="mailto:${email}" style="color: #3498db; text-decoration: none;">${email}</a></p>
  //                   <p style="margin: 10px 0;"><strong>Mövzu başlığı:</strong> ${subject}/p>
                    
  //                   <div style="margin: 15px 0; padding: 12px; background-color: #f5f5f5; border-left: 3px solid #3498db;">
  //                       <p style="margin: 0; font-style: italic;">${message}</p>
  //                   </div>
                    
  //                   <p style="margin: 10px 0; font-size: 14px; color: #7f8c8d;">
  //                       <strong>Göndərmə vaxtı:</strong> ${format(new Date(), 'dd.MM.yyyy HH:mm')}
  //                   </p>
  //               </div>
  //           </div>`,};

  // try {
  //   await transporter.sendMail(mailOptions);
  //   return true
  // } catch (error) {
  //   console.error('Error:', error);
  //   return true
  // }
};

const replayMessage = async (email, name, message, subject) => {
    // const mailOptions = {
    //     from: 'omarhajiyevo4@gmail.com',
    //     to: email,
    //     subject: `<p style="color: #7f8c8d; font-size: 14px;">${subject}</p>`,
    //     text:  `<div style="font-family: 'Arial', sans-serif; max-width: 650px; margin: 0 auto; padding: 20px; color: #333; line-height: 1.6; border: 1px solid #e0e0e0; border-radius: 8px;">
    //                 <p style="color: #7f8c8d; font-size: 14px;">Salam ${name},</p>
    //                 <div style="text-align: center; margin-bottom: 20px;">
    //                     <p style="font-size: 16px;">Portfolio saytım vasitəsilə göndərdiyiniz mesajı aldım.</p>
    //                 </div>
                    
    //                 <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
    //                     <p style="margin: 0; font-style: italic;">"<span style="color: #555;">${message}</span>"</p>
    //                 </div>
                    
    //                 <p>Mən sizə ən qısa zamanda qayıdacağam. Təcili sorğunuz varsa, bu e-poçta cavab verməklə mənə bildirin.</p>
                    
    //                 <p>Diqqətiniz üçün təşəkkür edirik!</p>
                    
    //                 <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #e0e0e0;">
    //                     <p style="margin: 5px 0;"><strong>Hörmətlə,</strong></p>
    //                     <p style="margin: 5px 0; font-size: 18px; color: #2a52be;">Ömər Hacıyev</p>
    //                     <p style="margin: 5px 0;">Full Stack Developer / Azerbijan, Baku</p>
    //                     <p style="margin: 5px 0;"> 
    //                     <a href="https://www.linkedin.com/in/omar-hajiyev-o4" style="color: #2a52be; text-decoration: none;">LinkedIn</a> | 
    //                     <a href="mailto:omarhajiyevo4@gmail.com" style="color: #2a52be; text-decoration: none;">omarhajiyevo4@gmail.com</a>
    //                     </p>
    //                 </div>
                    
    //                 <div style="margin-top: 20px; font-size: 12px; color: #777; text-align: center;">
    //                     <p>Bu avtomatik cavabdır. Bu e-poçta cavab verməklə mənimlə əlaqə saxlayın.</p>
    //                 </div>
    //                 </div>`,};
    
    //   try {
    //     await transporter.sendMail(mailOptions);
    //     return true;
    //   } catch (error) {
    //     console.error('Error:', error);
    //     return false;
    //   }
};

export {sendMessage, replayMessage};