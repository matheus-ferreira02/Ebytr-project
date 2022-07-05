import requestApi from '../../utils/requestApi';
import './style.css';

function Task({ task }) {
  const { title, content, createdAt, status, id } = task;
  const date = new Date(createdAt);
  const formattedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem('tokenEbytr') || '';

  const deleteTask = async () => {
    const options = {
      method: 'DELETE',
      headers: { authorization: token },
      url: `${BASE_URL}/tasks/${id}`,
    };

    const response = await requestApi(options);

    if (response.error) console.log('Algo deu errado');
    else window.location.reload();
  };

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
      <button className='btn-delete' onClick={ deleteTask }>Excluir</button>
    </section>
  );
}

export default Task;