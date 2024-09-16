const { User } = require("../../../models/index");
const userService = require("../../../services/user.service");
const { successResponse, errorResponse } = require("../../../utils/response");
const { StatusCodes } = require("http-status-codes");
const { Op } = require("sequelize");
module.exports = {
  index: async (req, res) => {
    try {
      const {
        _order = "desc",
        _sort = "id",
        _limit = 10,
        _page = 1,
        q,
      } = req.query;
      const { rows: users, count } = await userService.getUsers(
        _order,
        _sort,
        _limit,
        _page,
        q
      );
      return successResponse({
        status: StatusCodes.OK,
        res,
        data: users,
        meta: {
          total: count,
        },
        message: "Get users successfully",
      });
    } catch (error) {
      return errorResponse({
        res,
        errors: error.message,
        message: "Get users failed",
      });
    }
  },
  find: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await userService.getUser(id);
      return successResponse({
        res,
        data: user,
        message: "Get user successfully",
      });
    } catch (error) {
      return errorResponse({
        res,
        status: error.status || 500,
        message: "Get user failed",
        errors: error.message,
      });
    }
  },
};
