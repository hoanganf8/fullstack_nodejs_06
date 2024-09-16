const { getUserByEmail } = require("../../../services/auth.service");
const { comparePassword } = require("../../../utils/hash");
const {
  createAccessToken,
  createRefreshToken,
  verifyRefreshToken,
} = require("../../../utils/jwt");
const { successResponse, errorResponse } = require("../../../utils/response");
const redis = require("../../../utils/redis");

module.exports = {
  login: async (req, res) => {
    //1. Lấy dữ liệu
    //2. Validate
    //3. Truy vấn database để trả về user
    //4. So sánh password từ request với password hash trong database
    //5. Lưu dữ liệu user vào JWT (JSON WEB TOKEN)
    //6. Trả về response
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        const error = new Error("Email và mật khẩu không được để trống");
        error.status = 400;
        throw error;
      }
      const user = await getUserByEmail(email);
      if (!comparePassword(password, user.password)) {
        const error = new Error("Unauthorize");
        error.status = 401;
        throw error;
      }
      const accessToken = createAccessToken({
        userId: user.id,
      });
      const refreshToken = createRefreshToken(user.id);
      //Lưu refresh token lên redis để tiện cho quá trình thu hồi
      await redis.connect();
      await redis.set(`RefreshToken:${refreshToken}`, refreshToken);
      await redis.close();
      return successResponse({
        res,
        message: "Login successfully",
        data: {
          accessToken,
          refreshToken,
        },
      });
    } catch (error) {
      return errorResponse({
        res,
        status: error.status || 500,
        message: "Login failed",
        errors: error.message,
      });
    }
  },
  profile: async (req, res) => {
    const user = req.user;
    return successResponse({
      res,
      data: user,
      message: "Get user profile successfully",
    });
  },
  logout: async (req, res) => {
    //Lấy được token
    const { accessToken } = req;
    await redis.connect();
    await redis.set(`Blacklist:${accessToken}`, accessToken);
    await redis.close();
    return successResponse({
      res,
      message: "Logout successfully",
    });
  },
  refreshToken: async (req, res) => {
    try {
      const { refreshToken } = req.body;
      const { userId } = verifyRefreshToken(refreshToken);
      //Kiểm tra refresh token có nằm trên redis không?
      await redis.connect();
      const tokenFromRedis = await redis.get(`RefreshToken:${refreshToken}`);
      await redis.close();
      if (!tokenFromRedis) {
        throw new Error("Refresh token not found");
      }
      //Tạo access token mới
      const accessToken = createAccessToken({
        userId,
      });
      return successResponse({
        res,
        data: {
          accessToken,
          refreshToken,
        },
        message: "Refresh token successfully",
      });
    } catch (error) {
      return errorResponse({
        res,
        status: 401,
        message: "Refresh token failed",
        errors: error.message,
      });
    }
  },
};
