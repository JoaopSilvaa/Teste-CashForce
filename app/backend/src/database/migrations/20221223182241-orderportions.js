'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('OrderPortions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nDup: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      dVenc: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      vDup: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      availableToMarket: {
        defaultValue: 1,
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
    })
  },

  down: async (queryInterface, _Sequelize) => {
   await queryInterface.dropTable('OrderPortions')
  }
};
