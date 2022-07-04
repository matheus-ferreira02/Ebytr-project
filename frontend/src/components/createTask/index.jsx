import { useRef, useState } from 'react';
import requestApi from '../../utils/requestApi';

function createTask() {
  const [disabledSubmit, setDisabledSubmit] = useState(true);
  const titleRef = useRef();
  const contentRef = useRef();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem('tokenEbytr') || '';

  const verifyFields = () => {
    const { value: title } = titleRef.current;
    const { value: content } = contentRef.current;
    const isValidFields = [title.length >= 5, content.length >= 5];

    setDisabledSubmit(!isValidFields.every((isValid) => isValid));
  };

  const submitTask = async () => {
    const options = {
      method: 'POST',
      headers: { authorization: token },
      url: `${BASE_URL}/tasks`,
      data: {
        title: titleRef.current.value,
        content: contentRef.current.value,
      }
    };

    const response = await requestApi(options);
    console.log(response);

    if (response.error) console.log('Algo deu errado');
    else window.location.reload();
  };

  return (
    <section className="createTask">
      <form onSubmit={ (event) => event.preventDefault() }>
        <input
          type="text"
          placeholder="Titulo"
          onChange={ verifyFields }
          ref={ titleRef }
        />

        <input
          type="text"
          placeholder="Conteúdo"
          onChange={ verifyFields }
          ref={ contentRef }
        />

        <button type="submit" disabled={ disabledSubmit } onClick={ submitTask }>
          Criar tarefa
        </button>
      </form>
      
    </section>
  );
}

export default createTask;