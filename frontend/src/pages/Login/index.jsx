import { useState, useRef } from 'react';

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [disabledSubmit, setDisabledSubmit] = useState(true);

  const signIn = (event) => {
    event.preventDefault();
    console.log('ola');
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