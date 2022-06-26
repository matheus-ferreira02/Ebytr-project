'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING(20),
        field: 'first_name'
      },
      lastName: {
        type: Sequelize.STRING(50),
        field: 'last_name'

      },
      email: {
        type: Sequelize.STRING(80)
      },
      password: {
        type: Sequelize.STRING(20)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Users');
  }
};