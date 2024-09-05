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
const { Op } = require("sequelize");
const { User, Phone, Post, Course } = require("../models/index");
const { object, string } = require("yup");
module.exports = {
  index: async (req, res) => {
    try {
      const { limit = 2, page = 1 } = req.query;
      const offset = (page - 1) * limit;
      const { rows: users, count } = await User.findAndCountAll({
        // order: [["id", "DESC"]],
        // attributes: { exclude: "password" },
        // limit,
        // offset,
        // where: {
        //   [Op.or]: {
        //     id: {
        //       [Op.gt]: 3, //id > 3
        //     },
        //     email: {
        //       [Op.iLike]: `%hoangan%`,
        //     },
        //   },
        //   status: {
        //     [Op.in]: [true, false],
        //   },
        // },
        // paranoid: false,
        include: [
          {
            model: Phone,
            as: "phone",
            attributes: ["id", "phone"],
          },
          {
            model: Post,
            as: "posts",
            attributes: ["id", "title", "content"],
          },
          {
            model: Course,
            as: "courses",
            attributes: ["id", "name", "price"],
            through: { attributes: [] }, //Hiển thị dữ liệu bảng trung gian
          },
        ],
      });
      res.set("x-total-count", count);
      // for (let i = 0; i < users.length; i++) {
      //   const user = users[i];
      //   const phone = await user.getPhone();
      //   const phoneValue = phone.dataValues.phone;
      //   users[i].setDataValue("phone", phoneValue);
      // }
      return res.json({ users });
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
  find: async (req, res) => {
    try {
      const { id } = req.params;
      // const user = await User.findByPk(id);
      const user = await User.findOne({
        where: { id: id },
      });
      if (!user) {
        const error = new Error("User Not Found");
        error.status = 404;
        throw error;
      }
      const phone = await user.getPhone();
      const posts = await user.getPosts();
      const courses = await user.getCourses();
      return res.json({ user, phone, posts, courses });
    } catch (e) {
      return res.status(e.status ?? 500).json({ error: e.message });
    }
  },
  create: async (req, res) => {
    try {
      const schema = object({
        fullname: string()
          .required("Tên không được để trống")
          .min(4, "Tên phải từ 4 ký tự"),
        email: string()
          .required("Email không được để trống")
          .email("Email không đúng định dạng")
          .test(
            "email-unique",
            "Email đã tồn tại trên hệ thống",
            async (value) => {
              //return true ==> passed
              const user = await User.findOne({
                where: { email: value },
              });
              return !user;
            }
          ),
        password: string().required("Mật khẩu không được để trống"),
      });
      const body = await schema.validate(req.body, {
        abortEarly: false, //Trả về full lỗi
      });
      const user = await User.create(body);
      const phone = await user.createPhone({
        phone: req.body.phone,
      });
      res.status(201).json({ user, phone });
    } catch (e) {
      if (e.inner) {
        const errors = Object.fromEntries(
          e.inner.map((error) => {
            return [error.path, error.message];
          })
        );
        return res.status(400).json({ errors });
      }

      return res.status(e.status ?? 500).json({ error: e.message });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const schema = object({
        name: string()
          .required("Tên không được để trống")
          .min(4, "Tên phải từ 4 ký tự"),
        email: string()
          .required("Email không được để trống")
          .email("Email không đúng định dạng")
          .test(
            "email-unique",
            "Email đã tồn tại trên hệ thống",
            async (value) => {
              //return true ==> passed
              const user = await User.findOne({
                where: {
                  email: value,
                  id: {
                    [Op.ne]: id,
                  },
                },
              });
              return !user;
            }
          ),
        password: string().required("Mật khẩu không được để trống"),
      });
      const body = await schema.validate(req.body, {
        abortEarly: false, //Trả về full lỗi
      });
      const status = await User.update(body, { where: { id } });
      res.json({ status });
    } catch (e) {
      if (e.inner) {
        const errors = Object.fromEntries(
          e.inner.map((error) => {
            return [error.path, error.message];
          })
        );
        return res.status(400).json({ errors });
      }

      return res.status(e.status ?? 500).json({ error: e.message });
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const status = await User.destroy({ where: { id } });
      res.json({ status });
    } catch (e) {
      res.json({ error: e.message });
    }
  },
  restore: async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id, {
      paranoid: false,
    });
    if (user) {
      const status = await user.restore();
      return res.json({ status });
    }
    res.json({ user });
  },
};
