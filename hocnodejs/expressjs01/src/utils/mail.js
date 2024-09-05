const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "hoangan@fullstack.edu.vn",
    pass: "cinp rgaf ixsk bfuw",
  },
});

module.exports = async (to, subject, content) => {
  const info = await transporter.sendMail({
    from: '"F8 Education 👻" <hoangan@fullstack.edu.vn>', // sender address
    to, // list of receivers
    subject, // Subject line,
    html: content, // html body
    replyTo: "hoangan@fullstack.edu.vn",
  });
  return info;
};

//Cách lấy smtp gmail
// Host: SMTP Host (smtp.gmail.com)
// Port: 587, 465
// Secure: true (Port 465), false (Port 587)
// User: SMTP Username (Diachiemail dung lam smtp server) ==> Tránh nhầm lẫn với địa chỉ gửi đi
// Pass: SMTP Password (Mật khẩu ứng dụng)
