module.exports = {
  index: function (req, res) {
    const title = "<i>F8 - Học lập trình để đi làm 111</i>";
    const pageTitle = "Trang chủ";
    const status = false;
    const users = ["User 1", "User 2", "User 3"];
    res.render("home/index", { title, status, users, pageTitle });
  },
};
