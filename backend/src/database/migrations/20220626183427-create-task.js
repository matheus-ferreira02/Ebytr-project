'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(30)
      },
      content: {
        type: Sequelize.STRING(300)
      },
      status: {
        type: Sequelize.STRING(15)
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'user_id',
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
        defaultValue: new Date()
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at',
        defaultValue: new Date()
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Tasks');
  }
};