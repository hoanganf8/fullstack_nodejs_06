"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("phones", "user_id", {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: "users",
        },
        key: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("phones", "user_id");
  },
};
