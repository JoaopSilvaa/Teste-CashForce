'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      orderNfId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      orderNumber: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      orderPath: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      orderFileName: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      orderOriginalName: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      emissiondate: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      pdfFile: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      emitedTo: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nNF: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      CTE: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      value: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      cnpjId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: {
          model: 'Cnpjs',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      userId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      buyerId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: {
          model: 'Buyers',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      providerId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: {
          model: 'Providers',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      orderStatusBuyer: {
        defaultValue: '0',
        type: Sequelize.STRING,
      },
      orderStatusProvider: {
        defaultValue: '0',
        type: Sequelize.STRING,
      },
      deliveryReceipt: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      cargoPackingList: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};
