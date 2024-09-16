const express = require("express");
const homeController = require("../controllers/home.controller");
const userController = require("../controllers/user.controller");
const postController = require("../controllers/post.controller");
const userCourseController = require("../controllers/userCourse.controller");
// const authMiddleware = require("../middlewares/auth.middleware");
// const permissionMiddleware = require("../middlewares/permission.middleware");
const sendMail = require("../utils/mail");
const redis = require("../utils/redis");
const router = express.Router();
router.get("/", homeController.index.bind(homeController));
// router.use(authMiddleware, permissionMiddleware);
router.get("/users", userController.index);
router.get("/users/:id", userController.find);
router.post("/users", userController.create);
router.put("/users/:id", userController.update);
router.delete("/users/:id", userController.destroy);
router.post("/users/:id/restore", userController.restore);

router.get("/posts", postController.index);
router.get("/posts/:id", postController.find);
router.post("/posts", postController.create);

router.post("/users-courses/:id/add", userCourseController.addCourse);
router.post("/users-courses/:id/update", userCourseController.updateCourse);

router.get("/test-mail", async (req, res) => {
  const info = await sendMail(
    "hoangan.web@gmail.com",
    "Ok chưa?",
    `
    <h1 style="color: red">Chào bạn </h1>`
  );
  res.json({ info });
});

router.get("/test-redis", async (req, res) => {
  await redis.connect();
  // await redis.set("name", "hoangan");
  await redis.delete("name");
  const name = await redis.get("name");
  await redis.close();
  res.json({ name });
});

module.exports = router;
