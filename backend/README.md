# Ebytr-backend

### Boas vindas ao repositório de Back-end da Ebytr 🚀
<hr>

Para executar esse projeto, atente-se a cada passo descrito a seguir.

Aqui você vai encontrar os detalhes de como colocar no ar a API da Ebytr e também executar testes de desenvolvimento.
</br>

## Orientações
<hr>

<details>
  <summary>⚠️ Dependências</summary></br>
    Este projeto foi desenvolvido usando os seguintes pacotes:
    <ul>
      <li><a href="https://www.npmjs.com/package/express" target="_blank">Express</a></li>
      <li><a href="https://sequelize.org/" target="_blank">Sequelize</a></li>
      <li><a href="https://www.npmjs.com/package/mysql2" target="_blank">Mysql2</a></li>
      <li><a href="https://www.npmjs.com/package/chai" target="_blank">Chai</a></li>
      <li><a href="https://www.npmjs.com/package/mocha" target="_blank">Mocha</a></li>
      <li><a href="https://www.npmjs.com/package/sinon" target="_blank">Sinon</a></li>
    </ul>
</details>

</br>

<details>
  <summary>🐳 Executando a API</summary></br>
  Neste projeto, foi utilizado o Docker para executar a aplicação.
  Então certifique-se de que o Docker esteja instalado em sua máquina<br>
  <a href="https://docs.docker.com/engine/install/ubuntu/" target="_blank">Instalação do docker</a><br>

<br>

  > Após isso execute o seguinte comando para iniciar os serviços da API e do banco de dados: `docker-compose up -d`.

  - Lembre-se de parar o Mysql se estiver usando localmente na porta `3306`, e certifique-se que não tem nenhuma outra aplicação rodando na porta `3000`.

  - Esses serviços irão inicializar um container chamado `api_ebytr` e outro chamado `database_ebytr`.

    - A partir daí voce pode rodar o container chamado `api_ebytr` para colocar a API no ar.

  > Use o comando `docker exec -it api_ebytr bash`.

  - Ele te dará acesso ao terminal interativo do container criado pelo docker-compose.

  - Instale as dependências.

  > Use o comando `npm install`.

  - Agora coloque a API no ar.

  > Use o comando `npm start`

  Se tudo ocorreu bem, irá aparecer no terminal a seguinte mensagem `Online na porta 3000`. Tudo pronto, agora vamos colocar o front-end no ar, basta seguir os passos desse repositório: <a href="#">Link</a>
</details>

</br>

<details>
  <summary>📄 Comandos</summary></br>
  O projeto já vem com alguns comandos específicos caso queira executar certas tarefas:</br>

  > Execute `npm start` para colocar a API no ar.

</br>

  > Execute `npm run dev` para colocar a API no ar em modo de desenvolvimento. 

</br>

  > Execute `npm test` para executar todos os testes.
</details>

</br>

## Rotas
<hr>

<details>
  <summary>Login</summary></br>
  Para fazer login com um usuário, basta fazer uma requisição na rota /login, passando o seguinte corpo na requisição:

~~~json
  {
    "email": "teste@gmail.com",
    "password": "123456"
  }
~~~

  Esse endpoint retorná um token de acesso que expira em 7 dias

~~~json
  {
    "token": "dadawawfwegeteawerjegwwher....."
  }
~~~

  Caso faça uma requisição sem o campo "email", a API responserá com o status `400` e com o json:

~~~json
  {
    "message": "\"email\" is required"
  }
~~~

  Caso faça uma requisição com o formato de "email" inválido, a API responserá com o status `400` e com o json:

~~~json
  {
    "message": "\"email\" must be a valid email"
  }
~~~

  Caso faça uma requisição sem o campo "password", a API responserá com o status `400` e com o json::

~~~json
  {
    "message": "\"password\" is required"
  }
~~~

  Caso faça uma requisição com a senha menor que 6 caracteres, a API responserá com o status `400` e com o json:

~~~json
  {
    "message": "\"password\" length must be at least 6 characters long"
  }
~~~

</details>


<details>
  <summary>GET Tasks</summary></br>
  Para pegar as tasks, basta fazer uma requisição para o endpoint GET /task com o token:

  Esse endpoint retorná todos as tarefas relacionadas a cada usuário de acordo com o token
</details>

<details>
  <summary>POST Tasks</summary></br>
  Para pegar criar uma task, basta fazer uma requisição para o endpoint POST /task com o token, passando o seguinte corpo na requisição:


~~~json
{
  "title": "Nova tarefa",
  "content": "Descrição da tarefa"
}
~~~

Esse endpoint retorná a task criada.


Caso faça uma requisição sem o titulo, a API responserá com o status `400` e com o json:
~~~json
  {
    "message": "\"title\" is required"
  }
~~~

  Caso faça uma requisição sem o conteúdo, a API responserá com o status `400` e com o json:
~~~json
  {
    "message": "\"content\" is required"
  }
~~~

  Caso faça uma requisição com o título menor que 5 caracteres, a API responserá com o status `400` e com o json:

~~~json
  {
    "message": "\"title\" length must be at least 5 characters long"
  }
~~~

  Caso faça uma requisição com o conteúdo menor que 5 caracteres, a API responserá com o status `400` e com o json:

~~~json
  {
    "message": "\"content\" length must be at least 5 characters long"
  }
~~~
</details>
