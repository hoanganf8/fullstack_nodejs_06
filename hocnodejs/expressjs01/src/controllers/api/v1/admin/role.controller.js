const {
  errorResponse,
  successResponse,
} = require("../../../../utils/response");
const { Permission, Role } = require("../../../../models/index");
module.exports = {
  index: async (req, res) => {
    try {
      const roles = await Role.findAll();
      return successResponse({
        res,
        data: roles,
        message: "Get roles successfully",
      });
    } catch (error) {
      return errorResponse({
        res,
        status: error.status || 500,
        message: "Get roles failed",
        errors: error.message,
      });
    }
  },
  find: async (req, res) => {
    try {
      const { id } = req.params;
      const role = await Role.findByPk(id, {
        include: {
          model: Permission,
          as: "permissions",
          through: { attributes: [] },
        },
      });
      return successResponse({
        res,
        data: role,
        message: "Get role successfully",
      });
    } catch (error) {
      return errorResponse({
        res,
        status: error.status || 500,
        message: "Get role failed",
        errors: error.message,
      });
    }
  },
  create: async (req, res) => {
    try {
      const { name, permissions: permissionsFromBody } = req.body;
      if (!name) {
        const error = new Error("Role name is required");
        error.status = 400;
        throw error;
      }
      const isRole = await Role.findOne({
        where: {
          name,
        },
      });
      if (isRole) {
        const error = new Error("Role already exists");
        error.status = 400;
        throw error;
      }
      const role = await Role.create({
        name,
      });
      if (role && permissionsFromBody.length) {
        const permissions = await Promise.all(
          permissionsFromBody.map(async (value) => {
            const [permission] = await Permission.findOrCreate({
              where: {
                value,
              },
              defaults: {
                value,
              },
            });
            return permission;
          })
        );

        if (permissions) {
          await role.setPermissions(permissions);
        }
      }
      return successResponse({
        res,
        status: 201,
        data: role,
        message: "Create role successfully",
      });
    } catch (error) {
      return errorResponse({
        res,
        status: error.status || 500,
        message: "Create role failed",
        errors: error.message,
      });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, permissions: permissionsFromBody } = req.body;
      const role = await Role.findByPk(id);
      if (!role) {
        const error = new Error("Role not found");
        error.status = 404;
        throw error;
      }
      if (name) {
        await role.update({
          name,
        });
      }
      if (permissionsFromBody.length) {
        const permissions = await Promise.all(
          permissionsFromBody.map(async (value) => {
            const [permission] = await Permission.findOrCreate({
              where: {
                value,
              },
              defaults: {
                value,
              },
            });
            return permission;
          })
        );

        if (permissions) {
          await role.setPermissions(permissions);
        }
      }
      successResponse({
        res,
        status: 200,
        data: role,
        message: "Update role successfully",
      });
    } catch (error) {
      return errorResponse({
        res,
        status: error.status || 500,
        message: "Update role failed",
        errors: error.message,
      });
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const role = await Role.findByPk(id);
      if (!role) {
        const error = new Error("Role not found");
        error.status = 404;
        throw error;
      }
      await role.setPermissions([]);
      await role.destroy();
      return successResponse({
        res,
        status: 200,
        data: role,
        message: "Delete role successfully",
      });
    } catch (error) {
      return errorResponse({
        res,
        status: error.status || 500,
        message: "Update role failed",
        errors: error.message,
      });
    }
  },
};
