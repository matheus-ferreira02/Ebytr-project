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

  > Após isso execute o seguinte comando para iniciar os serviços da API e do banco de dados: `docker-compose up -d`

  - Lembre-se de parar o Mysql se estiver usando localmente na porta `3306`, e certifique-se que não tem nenhuma outra aplicação rodando na porta `3000`

  - Esses serviços irão inicializar um container chamado `api_ebytr` e outro chamado `database_ebytr`
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