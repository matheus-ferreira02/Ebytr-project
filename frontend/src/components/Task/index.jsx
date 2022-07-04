function Task({ task }) {
  const { title, content, createdAt, status } = task;
  const date = new Date(createdAt);
  const formattedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  return (
    <section style={ { border: '5px solid black' } }>
      <h1>{ title }</h1>
      <p>{ content }</p>
      <p>{ formattedDate }</p>
      <p>{ status }</p>
    </section>
  );
}

export default Task;