// module.exports = {
//   index: (req, res, next) => {
//     try {
//       const { status, keyword } = req.query;
//       let a;
//       if (!a) {
//         throw new Error("a không hợp lệ");
//       }
//       res.send(`
//         Danh sách người dùng
//         Status: ${status}
//         Keyword: ${keyword},
//         User: ${req.user.email}
//         `);
//     } catch (e) {
//       next(e.message);
//     }
//   },
//   create: (req, res) => {
//     // console.log(req.headers);
//     // console.log(req.get("x-api-key"));

//     // console.log(req.body);
//     // res.set("x-api-key", "123456"); // Set Response Header
//     // res.status(404); //Trả về status code
//     // res.json() ==> Trả về json
//     // res.redirect() ==> Chuyển hướng (Chỉ áp dụng khi làm server-side)
//     // res.render() ==> Gọi file view vào controller
//     res.send("Tạo người dùng");
//   },
//   show: (req, res) => {
//     const { id } = req.params;
//     res.send("Xem người dùng: " + id);
//   },
// };
// const user = require("../models/user");

// module.exports = {
//   index: async (req, res) => {
//     try {
//       const users = await user.getUsers();
//       return res.json({ users });
//     } catch (error) {
//       return res.json({ error: error.message });
//     }
//   },
//   find: async (req, res) => {
//     try {
//       const { id } = req.params;
//       const [userData] = await user.getUser(id);
//       if (!userData) {
//         throw new Error("User not found");
//       }
//       return res.json({ userData });
//     } catch (error) {
//       return res.json({ error: error.message });
//     }
//   },
//   //Thêm resource
//   store: async (req, res) => {
//     try {
//       const body = req.body;
//       const userData = await user.addUser(body);
//       return res.json({ userData });
//     } catch (error) {
//       return res.json({ error: error.message });
//     }
//   },
// };
const { User } = require("../models/index");
module.exports = {
  index: async (req, res) => {
    try {
      const users = await User.findAll({
        order: [["id", "DESC"]],
        attributes: { exclude: "password" },
        limit: 3,
      });
      return res.json({ users });
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
};
