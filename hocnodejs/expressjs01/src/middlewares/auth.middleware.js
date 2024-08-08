module.exports = (req, res, next) => {
  console.log("Auth middleware");
  req.user = {
    name: "Hoàng An",
    email: "hoangan.web@gmail.com",
  };
  next();
};
