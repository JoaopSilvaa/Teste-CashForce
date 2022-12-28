# Boas vindas ao Teste-CashForce!

# O que é o Teste-CashForce?

É uma aplicação FullStack dockerizada que consiste em uma API Restful, com um simples CRUD de Notas Fiscais e Cedentes no Backend, consumindo um Banco de Dados MySQL e um Frontend desenvolvido em Vue que apresenta a lista completa de Notas Fiscais, a partir do consumo da API.

## Técnologias usadas

Back-end:
> Desenvolvido usando: Javascript, API Restful, Sequelize, MySQL, Node.Js, Docker.

Front-end:
> Desenvolvido usando: Vue.js, HTML, CSS e Javascript, Docker.

<details>
<summary><strong> Estrutura do projeto</strong></summary><br />

O projeto é composto de 4 entidades importantes para sua estrutura:

1️⃣ **Banco de dados:**
  - Contém um container docker MySQL já configurado no docker-compose através de um serviço definido como `db`.
  - Tem o papel de fornecer dados para o serviço de _backend_.

2️⃣ **Back-end:**
 - Deve rodar na porta `3001`, pois o front-end faz requisições para ele nessa porta por padrão;
 - A aplicação é inicializada a partir do arquivo `app/backend/src/server.js`;

3️⃣ **Front-end:**
  - Deve rodar na porta `3000`;
  - O front se comunica com serviço de back-end pela url `http://localhost:3001` através dos endpoints contruídos.

4️⃣ **Docker:**
  - O `docker-compose` tem a responsabilidade de unir todos os serviços conteinerizados (backend, frontend e db) e subir o projeto completo com o comando `npm run compose:up`;
  - Cada serviço tem sua `Dockerfile` corretamente configurada em suas raízes (`front-end` e `back-end`), tornando possível a inicialização da aplicação;

</details>

<details>
  <summary><strong>🎲 Sequelize</strong></summary>
  <br/>

  ⚠️ O `package.json` do diretório `app/backend` contém um script `drop` que é responsável por "dropar" o banco. Você pode executá-lo com o commando `npm run drop` se por algum motivo precisar excluir a base de dados;

  ⚠️ O `package.json` do diretório `app/backend` também contém o script `prestart` que é responsável por criar o banco de dados, executar as _migrations_ e as _seeders_. Você pode executá-lo com o commando `npm run prestart` se por algum motivo precisar criar a base de dados;
  
  ⚠️ O `package.json` do diretório `app/backend` também contém o script `start` que é responsável por recriar todo o banco de dados e inicializar a API. Você pode executá-lo com o commando `npm start` se por algum motivo precisar criar a base de dados e inicializar manualmente a API;

  ⚠️ Quaisquer execução referente ao sequelize-cli deve ser realizada dentro do diretório `app/backend`.

  ⚠️ **O sequelize já foi inicializado, portanto NÃO é necessário executar o `sequelize init` novamente**

</details>

<details>
  <summary><strong> 👀 Comandos úteis </strong></summary><br />

  - Você pode executar `npm run compose:up` para subir os containers da aplicação, aguardar que todos estejam saudáveis e startados, podendo assim acessar o endereço `localhost:3000` no seu navegador para verificar o frontend executando corretamente ou então acesse `localhost:3001` verificando as rotas disponíveis em um app como <a href='https://www.postman.com/downloads/'>Postman</a> ou no seu navegador.
     <br />⚠️ **as rotas disponíveis estão descritas no README.md do backend**
  - Você pode **subir ou descer uma aplicação do compose**, utilizando `npm run` com os scripts `compose:up`, `compose:down`;
  - Os comando de _compose_ anteriores estão configurados para executar o _docker-compose_ com o terminal desanexado (detached mode `-d`). Caso queira acompanhar os logs de um serviço em tempo real pelo terminal, basta executar `npm run logs [nome_do_servico]` onde _nome_do_servico_ é opcional e pode receber os serviços _backend_, _frontend_ ou _db_
</details>


## Para executar o projeto corretamente, atente-se a cada passo descrito a seguir
<details>
<summary><strong> ⚠️ Configurações mínimas para execução do projeto</strong></summary><br />

Na sua máquina você deve ter:

 - Sistema Operacional Distribuição Unix
 - Node versão 16
 - MySQL
 - Docker (**opcional, mas recomendado**)
 - Docker-compose versão >=1.29.2 (**opcional, mas recomendado**)

➡️ O `node` deve ter versão igual ou superior à `16.15.0 LTS`:
  - Para instalar o nvm, [acesse esse link](https://github.com/nvm-sh/nvm#installing-and-updating);
  - Rode os comandos abaixo para instalar a versão correta de `node` e usá-la:
    - `nvm install 16 --lts`
    - `nvm use 16`
    - `nvm alias default 16`

➡️ O `docker-compose` deve ter versão igual ou superior à`ˆ1.29.2`:
  * Use esse [link de referência para realizar a instalação corretamente no ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou a [documentação oficial](https://docs.docker.com/compose/install/);
  * Acesse o [link da documentação oficial com passos para desinstalar](https://docs.docker.com/compose/install/uninstall/) caso necessário.

</details>


<details>
<summary><strong> 👨‍💻 Informações Importantes </strong></summary><br />

  1. Clone o repositório
- Utilize o comando: `git clone git@github.com:JoaopSilvaa/Teste-CashForce.git`<br />
2. Acesse a pasta do projeto
- Acesse a pasta Teste-CashForce com `cd Teste-CashForce`;<br />
3. Crie uma nova branch a partir da main
 - Verifique se você está na branch `main`
   * Exemplo: `git branch`
 - Se não estiver, mude para a branch `main`
   * Exemplo: `git checkout main`
 - Crie a branch
    * Exemplo: `git checkout -b joaozinho-teste-cashforce`<br />
4. Instale as dependências gerais do projeto 
- Execute o comando `npm install` na pasta raíz do projeto;<br />
5. Suba a aplicação 
 
   <details>
   <summary><strong> 🐳 Com Container Docker-Compose </strong></summary><br />

    - Execute o comando `npm run compose:up` na pasta raíz do projeto;
    - Aguarde que todos os containers estejam saudáveis e acesse em seu browser o endereço: `http://localhost:3000`;

   </details>
    
   <details>
   <summary><strong> Sem Container Docker-Compose </strong></summary><br />

    ⚠️ Garanta que você tenha instalado um servidor MySQL em seu computador;
    - Acesse a pasta `Teste-CashForce/app/backend/`;
    - Instale as dependências com `npm install`
    - Configure o as variáveis de ambiente alterando o arqquivo .env.example para .env e alterando os dados destro do arquivo
    - Execute `npm start` para criar o banco de dados e subir a API;
    - Abra outro terminal e acesse a pasta `Teste-CashForce/app/frontend`;
    - Instale as dependências com `npm install` e execute `npm run serve` para criar subir a aplicação frontend;
    - Acesse em seu browser o endereço: `http://localhost:8080`;

   </details>
</details>


Projeto Desenvolvido por [João Antônio](https://github.com/JoaopSilvaa)
