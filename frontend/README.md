# Ebytr-FrontEnd

### Boas vindas ao Front-end da Ebytr 🚀

## Orientações
<hr>

<details>
  <summary>Login</summary></br>
    Ao entrar na página, será redirecionado a página de login, onde o usuário terá que entrar
    
- Quando entrar com um usuário que existe, será redirecionado para a página de Tasks, e o token retornado da API, ficará armazenado no "localStorage" na chave "tokenEbytr".

- Caso o usuário não exista ou, email ou senha estejam incorretas, será disparado a mensagem "Usuário ou senha incorretas"

- Caso a API esteja fora do ar, será disparado a mensagem "Erro do servidor, tente novamente mais tarde"
</details>