"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Phone, {
        foreignKey: "user_id",
        as: "phone",
      });
      User.hasMany(models.Post, {
        foreignKey: "user_id",
        as: "posts",
      });
      User.belongsToMany(models.Course, {
        through: "users_courses",
        foreignKey: "user_id",
        as: "courses",
      });
      User.belongsToMany(models.Role, {
        through: "users_roles",
        foreignKey: "user_id",
        as: "roles",
      });
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      fullname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      createdAt: "created_at",
      updatedAt: "updated_at",
      // deletedAt: "deleted_at",
      // paranoid: true,
      // timestamps: false,
    }
  );
  return User;
};
