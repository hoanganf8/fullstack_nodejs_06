const express = require("express");
const userController = require("../../controllers/api/v1/user.controller");
const authController = require("../../controllers/api/v1/auth.controller");
const authApiMiddleware = require("../../middlewares/authApi.middleware");
const redis = require("../../utils/redis");
const roleController = require("../../controllers/api/v1/admin/role.controller");
const router = express.Router();

router.get("/users", userController.index);
router.get("/users/:id", userController.find);
router.post("/auth/login", authController.login);

router.post("/auth/refresh-token", authController.refreshToken);
// router.use(authApiMiddleware);
router.get("/auth/profile", authController.profile);
router.post("/auth/logout", authController.logout);

//Admin
router.get("/admin/roles", roleController.index);
router.post("/admin/roles", roleController.create);
router.patch("/admin/roles/:id", roleController.update);
router.delete("/admin/roles/:id", roleController.destroy);

module.exports = router;
