'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('Providers',
    [
      {
        name: 'CEDENTE 002',
        tradingName: 'CEDENTE 002 LTDA',
        createdAt: '2020-10-29 21:22:21',
        updatedAt: '2020-10-29 21:22:22',
        cnpjId: 2,
      }
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Providers', null, {}),
};
