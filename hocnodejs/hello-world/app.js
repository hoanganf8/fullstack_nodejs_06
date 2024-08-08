//CommonJS
const http = require("http");
const server = http.createServer((req, res) => {
  const apiKey = req.headers["x-api-key"];
  //   res.setHeader("Content-Type", "text/html;charset=UTF-8");
  res.setHeader("Content-Type", "application/json; charset=UTF-8");
  res.setHeader("Set-Cookie", "name=hoangan;path=/;httpOnly");
  const user = { name: "Hoàng An", email: "hoangan.web@gmail.com", apiKey };
  //   res.statusCode = 404;
  res.end(JSON.stringify(user));
});
server.listen(3000, "localhost", () => {
  console.log("Đã chạy server với port 3000");
});
