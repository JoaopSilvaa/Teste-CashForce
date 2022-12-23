'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('Buyers',
    [
      {
        name: 'SACADO 001',
        tradingName: 'SACADO 001 LTDA',
        cashforceTax: '0',
        createdAt: '2020-10-29 21:20:33',
        updatedAt: '2020-10-29 21:20:34',
        cnpjId: 1,
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Buyers', null, {}),
};
