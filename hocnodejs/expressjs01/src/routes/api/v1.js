const express = require("express");
const userController = require("../../controllers/api/v1/user.controller");
const authController = require("../../controllers/api/v1/auth.controller");
const authApiMiddleware = require("../../middlewares/authApi.middleware");
const redis = require("../../utils/redis");
const roleController = require("../../controllers/api/v1/admin/role.controller");
const userRoleController = require("../../controllers/api/v1/admin/userRole.controller");
const permissionApiMiddleware = require("../../middlewares/permissionApi.middleware");
const router = express.Router();

router.get(
  "/users",
  authApiMiddleware,
  permissionApiMiddleware("users.read"),
  userController.index
);
router.get(
  "/users/:id",
  authApiMiddleware,
  permissionApiMiddleware("users.read"),
  userController.find
);
router.post(
  "/users",
  authApiMiddleware,
  permissionApiMiddleware("users.add"),
  userController.create
);
router.post("/auth/login", authController.login);

router.post("/auth/refresh-token", authController.refreshToken);
// router.use(authApiMiddleware);
router.get("/auth/profile", authController.profile);
router.post("/auth/logout", authController.logout);

//Admin
router.get("/admin/roles", roleController.index);
router.get("/admin/roles/:id", roleController.find);
router.post("/admin/roles", roleController.create);
router.patch("/admin/roles/:id", roleController.update);
router.delete("/admin/roles/:id", roleController.destroy);
router.get("/admin/users/:id/roles", userRoleController.index);
router.patch("/admin/users/:id/roles", userRoleController.setRoles);
router.delete("/admin/users/:id/roles", userRoleController.deleteRoles);

module.exports = router;
