const { User, Role } = require("../../../../models/index");
const {
  successResponse,
  errorResponse,
} = require("../../../../utils/response");
module.exports = {
  index: async (req, res) => {
    //Action trả về danh sách các role của 1 user
    try {
      const { id } = req.params;
      const user = await User.findByPk(id, {
        include: {
          model: Role,
          as: "roles",
          through: { attributes: [] },
        },
      });
      if (!user) {
        const error = new Error("User not found");
        error.status = 404;
        throw error;
      }
      return successResponse({
        res,
        data: user,
        message: "Get roles successfully",
      });
    } catch (error) {
      return errorResponse({
        res,
        status: error.status || 500,
        message: "Set roles failed",
        errors: error.message,
      });
    }
  },
  setRoles: async (req, res) => {
    //Cập nhật roles cho user
    try {
      const { id } = req.params;
      const { roles } = req.body;
      const user = await User.findByPk(id);
      if (!user) {
        const error = new Error("User not found");
        error.status = 404;
        throw error;
      }
      await user.setRoles(roles);
      return successResponse({
        res,
        data: user,
        message: "Set roles successfully",
      });
    } catch (error) {
      return errorResponse({
        res,
        status: error.status || 500,
        message: "Set roles failed",
        errors: error.message,
      });
    }
  },
  deleteRoles: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) {
        const error = new Error("User not found");
        error.status = 404;
        throw error;
      }
      await user.setRoles([]);
      return successResponse({
        res,
        data: user,
        message: "Delete roles successfully",
      });
    } catch (error) {
      return errorResponse({
        res,
        status: error.status || 500,
        message: "Delete roles failed",
        errors: error.message,
      });
    }
  },
};
