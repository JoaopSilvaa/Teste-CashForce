'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      phoneNumber: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      mobile: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      departament: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      verificationCode: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      emailChecked: {
        defaultValue: 0,
        type: Sequelize.TINYINT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      cashforceAdm: {
        defaultValue: 0,
        type: Sequelize.TINYINT,
      },
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
