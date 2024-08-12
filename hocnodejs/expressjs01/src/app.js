const express = require("express");
const morgan = require("morgan");
const expressLayouts = require("express-ejs-layouts");
const app = express();
//Logger
app.use(morgan("dev"));
app.use(express.static("public"));
const webRouter = require("./routes/web");
const apiRouter = require("./routes/api");
// const authMiddleware = require("./middlewares/auth.middleware");

//Setup view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//Setup Layout
app.use(expressLayouts);

//Body parse
app.use(express.json()); //Nhận body từ json
app.use(express.urlencoded({ extended: true })); //Nhận body từ urlencoded

//Middleware
// app.use(authMiddleware);

//Route
app.use(webRouter);
app.use("/api", apiRouter);

const errorHandler = (err, req, res, next) => {
  const accept = req.headers["accept"];
  res.status(500);
  if (accept === "application/json") {
    return res.status(500).json({
      message: err,
    });
  }
  return res.render("errors/500", { message: err });
};
app.use(errorHandler);

const notFoundHandler = (req, res) => {
  //Request Accept
  // - Nếu là application/json ==> Trả về json
  // - Ngược lại ==> Trả về view
  const accept = req.headers["accept"];
  res.status(404);
  if (accept === "application/json") {
    return res.json({
      message: "Not found",
    });
  }
  return res.render("errors/404");
};
app.use(notFoundHandler);

module.exports = app;
