"use strict";
const bcrypt = require("bcryptjs");
const faker = require("faker");

const data = (totalUser = 10) => {
  let users = [];

  for (let i = 0; i < totalUser; i++) {
    users.push({
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: bcrypt.hashSync("secret123"),
      created_at: new Date(),
      updated_at: new Date(),
    });
  }

  return users;
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("users", data());
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
