function Task({ title, content, createdAt }) {
  const date = new Date(createdAt);
  const formattedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  return (
    <section style={ { border: '5px solid black' } }>
      <h1>{ title }</h1>
      <p>{ content }</p>
      <p>{ formattedDate }</p>
    </section>
  );
}

export default Task;