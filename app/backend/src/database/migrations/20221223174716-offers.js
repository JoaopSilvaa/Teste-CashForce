'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Offers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tax: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      tariff: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      adValorem: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      float: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      iof: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      expiresIn: {
        allowNull: false,
        type: Sequelize.DATETIME,
      },
      paymentStatusSponsor: {
        defaultValue: 0,
        type: Sequelize.TINYINT,
      },
      paymentStatusProvider: {
        defaultValue: 0,
        type: Sequelize.TINYINT,
      },
      orderId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: {
          model: 'Orders',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      sponsorId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: {
          model: 'Sponsors',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    })
  },

  down: async (queryInterface, _Sequelize) => {
   await queryInterface.dropTable('Offers')
  }
};
