"use strict";
const { hashPassword } = require("../../utils/hash");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        fullname: "User 1",
        email: "user1@gmail.com",
        status: true,
        password: hashPassword("123456"),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        fullname: "User 2",
        email: "user2@gmail.com",
        status: false,
        password: hashPassword("123456"),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null);
  },
};
