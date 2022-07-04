const tasks = [
  {
    id: 1,
    title: 'Organizar as tarefas',
    content: 'Organizar a papelada da reunião da diretoria',
    status: 'pending',
    userId: 1,
    createdAt: Date.now(),
    upadatedAt: Date.now(),
  },
  {
    id: 2,
    title: 'Assinar contratações',
    content: 'Assinar carteiras de trabalhos dos novos funcionários',
    status: 'completed',
    userId: 1,
    createdAt: Date.now(),
    upadatedAt: Date.now(),
  }
];

module.exports = {
  tasks,
}