'use strict';

module.exports = {
  up: async  (queryInterface) => {
    await queryInterface.bulkInsert('Tasks', [
      {
        title: 'Organizar papelada',
        content: 'Organizar a papelada da reunião da diretoria',
        status: 'pending',
        user_id: 1
      },
      {
        title: 'Assinar contratações',
        content: 'Assinar carteiras de trabalhos dos novos funcionários',
        status: 'completed',
        user_id: 1
      },
      {
        title: 'Preparar slide',
        content: 'Preparar apresentação para a reunião da diretoria',
        status: 'progress',
        user_id: 2
      },
      {
        title: 'Apresentar empresa',
        content: 'Apresentar empresa para os novos funcionários',
        status: 'pending',
        user_id: 2
      },
    ], {
      underscored: true
    });
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
