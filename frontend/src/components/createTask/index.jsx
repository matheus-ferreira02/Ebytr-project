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
    <section style={{
      padding: '10px 0',
      width:'100%'
    }}>
      <form style={{
        display: 'flex',
        justifyContent: 'space-between',
      }} onSubmit={ (event) => event.preventDefault() }>
        <div style={{
          width: '60%',
          display: 'flex',
          justifyContent:'space-between'
        }}>
          <input
            style={{
              all: 'unset',
              padding: '10px',
              borderBottom: '1px solid black',
              width: '40%'
            }}
            type="text"
            placeholder="Titulo"
            onChange={ verifyFields }
            ref={ titleRef }
          />

          <input
            style={{
              all: 'unset',
              padding: '10px',
              borderBottom: '1px solid black',
              width: '40%'
            }}
            type="text"
            placeholder="Conteúdo"
            onChange={ verifyFields }
            ref={ contentRef }
          />
        </div>

        <button style={{
          all: 'unset',
          background: disabledSubmit ? '#C7F0C4' : '#019A36',
          padding: '10px',
          color: 'white',
          borderRadius: '5px',
          cursor: disabledSubmit ? 'not-allowed' : 'pointer'
        }} type="submit" disabled={ disabledSubmit } onClick={ submitTask }>
          Criar tarefa
        </button>
      </form>
      
    </section>
  );
}

export default createTask;