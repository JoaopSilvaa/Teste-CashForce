'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        name: 'ALLAN SOUZA',
        email: 'allan@cashforce.com.br',
        verificationCode: '',
        emailChecked: 1,
        createdAt: '2020-10-01 21:31:37',
        updatedAt: '2020-10-01 22:41:23',
        cashforceAdm: 1,
      }
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
