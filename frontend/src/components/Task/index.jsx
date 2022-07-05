import './style.css';

function Task({ task }) {
  const { title, content, createdAt, status } = task;
  const date = new Date(createdAt);
  const formattedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  return (
    <section style={ {
      borderRadius: '7px',
      padding: '20px',
      margin: '10px 0',
      background: '#141514'
    } }>
      <h1>{ title }</h1>
      <p>Descrição: { content }</p>
      <p>Data de criação: { formattedDate }</p>
      <p>status: { status }</p>
    </section>
  );
}

export default Task;