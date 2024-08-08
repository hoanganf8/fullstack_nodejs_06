const express = require("express");
const app = express();
const webRouter = require("./routes/web");
const apiRouter = require("./routes/api");
// const authMiddleware = require("./middlewares/auth.middleware");

//Body parse
app.use(express.json()); //Nhận body từ json
app.use(express.urlencoded({ extended: true })); //Nhận body từ urlencoded

//Middleware
// app.use(authMiddleware);

//Route
app.use(webRouter);
app.use("/api", apiRouter);

const errorHandler = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: err,
  });
};
app.use(errorHandler);

const notFoundHandler = (req, res) => {
  res.status(404).json({
    message: "Not found",
  });
};
app.use(notFoundHandler);

module.exports = app;
