import { useState, useRef } from 'react';
import requestAPI from '../../utils/requestApi';
import { useNavigate } from 'react-router-dom';

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [disabledSubmit, setDisabledSubmit] = useState(true);
  const [userNotFound, setUserNotFound] = useState(false);
  const [internalError, setInternalError] = useState(false);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();

  const resetState = () => {
    setUserNotFound(false);
    setInternalError(false);
  };

  const signIn = async (event) => {
    event.preventDefault();
    resetState();
    
    const options = {
      method: 'POST',
      data: {
        email: emailRef.current.value,
        password: passwordRef.current.value
      },
      url: `${BASE_URL}/login`,
    };

    const response = await requestAPI(options);

    if (response.error) {
      response.status === 404 ? setUserNotFound(true) : setInternalError(true);
    } else {
      const { token } = response.data;
      localStorage.setItem('tokenEbytr', token);
      navigate('/tasks');
    }
  };

  const verifyFields = () => {
    const { value: email } = emailRef.current;
    const { value: password } = passwordRef.current;

    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    const isValidEmail = regexEmail.test(email);
    const isValidPassword = password.length >= 6;
    const isValidFields = [isValidEmail, isValidPassword];

    setDisabledSubmit(!isValidFields.every((validField) => validField));
  };

  return (
    <section>
      <form onSubmit={ signIn }>
        <input
          onChange={ verifyFields }
          type="text" placeholder='Email'
          ref={ emailRef }
        />

        <input
          onChange={ verifyFields }
          type="text"
          placeholder='Senha'
          ref={ passwordRef }
        />

        <button type="submit" disabled={ disabledSubmit }>Entrar</button>
      </form>

      { userNotFound && <p>Usuário ou senha incorretas</p> }
      { internalError && <p>Erro do servidor, tente novamente mais tarde</p> }
    </section>
  );
}

export default Login;