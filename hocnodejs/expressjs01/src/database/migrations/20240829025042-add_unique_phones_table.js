"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("phones", {
      type: "unique",
      fields: ["phone"],
      name: "phones_phone_unique",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("phones", "phones_phone_unique");
  },
};
