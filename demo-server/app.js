const express = require("express");
var morgan = require("morgan");
const app = express();
const port = 3000;
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/khoa-hoc", (req, res) => {
  res.set("Set-Cookie", "name=hoangan;max-age=3600;path=/");
  res.send("<h1>Khóa học Fullstack</h1>");
});

app.get("/tin-tuc", (req, res) => {
  const cookie = req.get("Cookie");
  console.log(cookie);
  res.send("<h1>Tin tức</h1>");
});

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "http://127.0.0.1:60735");
  res.set("Access-Control-Allow-Headers", "x-api-key");
  next();
});

app.get("/api/users", (req, res) => {
  const users = [
    {
      id: 1,
      name: "User 1",
    },
    {
      id: 2,
      name: "User 2",
    },
    {
      id: 3,
      name: "User 3",
    },
  ];
  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
