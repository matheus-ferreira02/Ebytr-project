import React from 'react';

function Task({ title, content }) {
  return (
    <section style={ { border: '5px solid black' } }>
      <h1>{ title }</h1>
      <p>{ content }</p>
    </section>
  );
}

export default Task;