module.exports = {
  index: (req, res, next) => {
    try {
      const { status, keyword } = req.query;
      let a;
      if (!a) {
        throw new Error("a không hợp lệ");
      }
      res.send(`
        Danh sách người dùng
        Status: ${status}
        Keyword: ${keyword},
        User: ${req.user.email}
        `);
    } catch (e) {
      next(e.message);
    }
  },
  create: (req, res) => {
    // console.log(req.headers);
    // console.log(req.get("x-api-key"));

    // console.log(req.body);
    // res.set("x-api-key", "123456"); // Set Response Header
    // res.status(404); //Trả về status code
    // res.json() ==> Trả về json
    // res.redirect() ==> Chuyển hướng (Chỉ áp dụng khi làm server-side)
    // res.render() ==> Gọi file view vào controller
    res.send("Tạo người dùng");
  },
  show: (req, res) => {
    const { id } = req.params;
    res.send("Xem người dùng: " + id);
  },
};
