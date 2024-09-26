const { User, Role, Permission } = require("../models/index");
const { errorResponse } = require("../utils/response");
module.exports = (permissionValue) => {
  return async (req, res, next) => {
    const user = await User.findByPk(req.user.id, {
      include: {
        model: Role,
        as: "roles",
        include: {
          model: Permission,
          as: "permissions",
        },
      },
    });
    const permissions = [];
    user.roles.forEach((role) => {
      role.permissions.forEach((permission) => {
        if (!permissions.includes(permission.value)) {
          permissions.push(permission.value);
        }
      });
    });
    if (!permissions.includes(permissionValue)) {
      return errorResponse({
        res,
        status: 403,
        message: "Permission denied",
      });
    }
    next();
  };
};
