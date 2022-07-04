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
    <section style={{
      width: '100%',
      margin: 'auto',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <form style={{
        background: '#B0C4D4',
        borderRadius: '10px',
        height: '35%',
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px'
      }}onSubmit={ signIn }>
        <input
          style={{
            height: '50px',
            fontSize: '18px',
            padding: '10px',
            margin: '20px 0',
            borderRadius: '5px'
          }}
          onChange={ verifyFields }
          type="text" placeholder='Email'
          ref={ emailRef }
        />

        <input
          style={{
            height: '50px',
            fontSize: '18px',
            padding: '10px',
            margin: '20px 0',
            borderRadius: '5px',
            border: '1px solid blue',
          }}
          onChange={ verifyFields }
          type="password"
          placeholder='Senha'
          ref={ passwordRef }
        />

        <button style={{
          border: 'none',
          background: disabledSubmit ? '#C7F0C4' : '#019A36',
          width: '30%',
          padding: '15px',
          fontSize: '18px',
          margin: 'auto',
          cursor: disabledSubmit ? 'not-allowed' : 'pointer'
        }} type="submit" disabled={ disabledSubmit }>Entrar</button>

        { userNotFound && <p style={{
          background: '#B0C4D4',
          textAlign: 'center',
          margin: '10px',
          color: 'red'
        }}>Usuário ou senha incorretas</p> }
        { internalError && <p style={{
          background: '#B0C4D4',
          textAlign: 'center',
          margin: '10px',
          color: 'red'
        }}>Erro do servidor, tente novamente mais tarde</p> }
      </form>
    </section>
  );
}

export default Login;