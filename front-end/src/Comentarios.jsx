import React from "react";

const Comentarios = () => {
  return <div>Comentarios</div>;
};

export default Comentarios;

// rafce

// Arrow Function
// const App2 = () => <h1>Olá, Mundo!</h1>;

// Nomeação de componentes:
// PascalCase (Primeira letra de cada palavra sempre maiúscula)

// Nomeação de variáveis, funções:
// camelCase (Primeira palavra em minúsculo e as restantes em Maiúsculo)

// Nomeação de classes:
// Kebab-case

// export Default: pode importar com qualquer nome e sem chaves.
// export sem "Default": pode importar APENAS entre chaves e com o nome exportado.

// Self Closing Tag: <Header ><Header /> OU <Header />

// Exemplo de estilização CSS:
// element.style {
//   background-color: antiquewhite;
//   padding: 20px;
//   margin: 20px;
//   border: solid 10px mediumspringgreen;
//   box-sizing: content-box;
//   width: 500px;
// }

// Nomeação de classes em CSS
// Metodologia BEM:
// Blocks
// Elements
// Modifiers
// bloco__elemento--modificador
// header
// header__linl
// header__link--small
// item-list__header
// Nomes compostos são separados por hífen -

// Tag vazia em React se chama Fragment ou Fragmento

// Componentes recebem "props", que são Parâmetros ou Argumentos para serem usados pela função.

// Exemplo de estrutura IF abreviada em JavaScript:
/* items === 5 ? (
      <>
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
      </>
    ) : (
      <>
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
      </>
    ) */

// {Array(items)
//   .fill()
//   .map((currentValue, index) => (
//     <SingleItem key={`${title}-${index}`} />
//   ))}

// Spread Operator
// SingleItem {...currObj}

// Quando componentes serão re-renderizados?
// Um dos casos é quando uma variável de estado usada por este componente é atualizada.

// Hook = useState

// API _____________________________________________

// API significa Application Programming Interface.
// Criar o arquivo server.js
// Na pasta back-end, para criar o package.json, utilizar os comandos 'npm init -y'.
// Para instalar o Express para criação da API, utilizar o comando 'npm i express', e depois adicionar ' "type": "module", ' dentro de package.json para que ele possa funcionar corretamente.

// Tipos de requisição: POST, GET, PUT, DELETE
// CRUD - Create Read Update Delete

// Endpoint: rota que pode ser acessada por meio de uma API.

// Fetch ou Axios: tipos de requisições que podem ser utilizados em JavaScript. Para este projeto será utilizado Axios ('npm i axios' na pasta front-end).

// Middleware ('npm i cors' na pasta back-end)
