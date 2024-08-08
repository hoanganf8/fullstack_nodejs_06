module.exports = (req, res, next) => {
  console.log("Permission middleware");
  res.set("x-permission", "true");
  next();
};
