import { useState, useRef } from 'react';
import requestAPI from '../../utils/requestApi';

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [disabledSubmit, setDisabledSubmit] = useState(true);
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const signIn = async (event) => {
    event.preventDefault();
    
    const options = {
      method: 'POST',
      url: `${BASE_URL}/login`,
      data: {
        email: emailRef.current.value,
        password: passwordRef.current.value
      }
    };

    const response = await requestAPI(options);

    if (response.error) console.log(response);
    else console.log(response);
  };

  const verifyFields = () => {
    const { value: email } = emailRef.current;
    const { value: password } = passwordRef.current;

    const regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

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
    </section>
  );
}

export default Login;