'use strict';

module.exports = {
  up: async  (queryInterface) => {
    await queryInterface.bulkInsert('Users', [
      {
        first_name: 'Ricardo',
        last_name: 'Carvalho',
        email: 'ric.carvalho2022@gmail.com',
        password: '12345678'
      },
      {
        first_name: 'Joana',
        last_name: 'Dávila',
        email: 'jo.davila2022@gmail.com',
        password: '12345678'
      },
    ], {
      underscored: true
    });
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
