# Automa-o_Cypress
Projeto de Automação de Cypress
Aqui está um template de README.md para um projeto de automação utilizando Cypress com BDD e Page Objects, tanto para testes de Web quanto de API.

# Projeto de Automação Web e API com Cypress

Este projeto de automação utiliza o Cypress para testes de Web e API, com a abordagem BDD (Behavior-Driven Development) e a arquitetura de Page Objects. Abaixo estão as instruções de como configurar e executar os testes.

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Configuração do Cypress](#configuração-do-cypress)
- [Testes Web com Page Objects](#testes-web-com-page-objects)
- [Testes de API](#testes-de-api)
- [Executando os Testes](#executando-os-testes)
- [Relatórios de Teste](#relatórios-de-teste)
- [Contribuição](#contribuição)

## Pré-requisitos

Antes de iniciar, é necessário ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (Recomendado: versão LTS)
- [Cypress](https://www.cypress.io/)
- [Cucumber](https://github.com/cypress-io/cypress-realworld-app/tree/main/cypress/support/commands)

### Instalar Dependências

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/projeto-cypress.git
cd projeto-cypress
npm install
Instalação
Instalar o Cypress:
bash
npm install cypress --save-dev
Instalar dependências adicionais para BDD e Cucumber:
bash
npm install @badeball/cypress-cucumber-preprocessor --save-dev
Instalar o Cypress XPath como dependência de desenvolvimento: Execute o seguinte comando no terminal dentro do diretório do seu projeto:
npm install -D cypress-xpath
Estrutura do Projeto
A estrutura do projeto segue o padrão:

bash.
├── cypress/
│   ├── fixtures/             # Dados para os testes
│   ├── integration/          # Testes de integração (Web e API)
│   │   ├── web/              # Testes de Web (utilizando Page Objects)
│   │   ├── api/              # Testes de API
│   │   └── steps/            # Arquivos de passos do Cucumber
│   ├── plugins/              # Plugins do Cypress
│   ├── support/              # Comandos personalizados e Hooks
│   └── videos/               # Vídeos dos testes
├── package.json              # Dependências e scripts do projeto
└── cypress.json              # Configurações do Cypress
Configuração do Cypress
A configuração do Cypress pode ser feita no arquivo cypress.json. Aqui está um exemplo de configuração básica:

json

{
  "baseUrl": "https://www.seusite.com",
  "viewportWidth": 1280,
  "viewportHeight": 720,
  "integrationFolder": "cypress/integration",
  "video": true
}
Para habilitar a integração com o Cucumber, adicione as configurações abaixo no arquivo cypress/plugins/index.js:

javascript
Copiar código
const cucumber = require('@badeball/cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
  return config;
};
Testes Web com Page Objects
Padrão Page Objects
No padrão Page Object você cria uma representação das páginas da aplicação em arquivos separados. Esses arquivos contêm métodos que realizam ações na página e retornam os elementos ou resultados.

Exemplo: Página de Login (loginPage.js)

javascript

// Elementos e acoes juntas aqui


let user = "teste1234";
let password = "Adim@1234";

class LoginPage {
    url = "https://advantageonlineshopping.com/#/";

    accessPage(){
        cy.visit(this.url);
    }

    clickBtnUSer(){
        cy.get('[id="menuUser"]').click();
    }

    fillUser(){
        cy.get('[name="username"]').type(user);
    }

    fillPassword(){
        cy.get('[name="password"]').type(password);
    }

    CheckBox(){
        cy.get('[name="remember_me"]').click();
    }

    clickLogin(){
        cy.get('[id="sign_in_btn"]').click();
    }
}
export default new LoginPage();


Exemplo de Teste Web com Step Object:

    "stepDefinitions": "e2e/step_definition/*js"

// Steps vao nessa pagina, junto do import do login 

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../pages/loginPage';
import homePage from '../pages/homePage'

Given("estar na pagina de Login", () =>{
    loginPage.accessPage();
})

When('preencher o usuario {string}', (user) =>{
    loginPage.clickBtnUSer()
    loginPage.fillUser(user);
})

When('preencher a senha {string}', (password) =>{
    loginPage.fillPassword(password);
    loginPage.CheckBox();
})

When('clicar em login', () =>{
    loginPage.clickLogin();
})

Then('a pagina inicial aparece', ()=>{
    homePage.validateHome();
})

BDD:
Feature: Pagina de Login
  Scenario: Login na Pagina  
    Given estar na pagina de Login
    When preencher o usuario "standard_user"
    When preencher a senha "secret_sauce"
    When clicar em login
    Then a pagina inicial aparece

Testes de API
Os testes de API podem ser realizados com os comandos nativos do Cypress para interagir com endpoints.

Exemplo de Teste de API (apiTest.spec.js):

javascript
Copiar código
describe('Testes de API', () => {
  it('Deve retornar os detalhes do usuário com sucesso', () => {
    cy.request('GET', 'https://api.seusite.com/usuario/123')
      .its('status')
      .should('equal', 200);
  });

    const newUser = {
      name: 'Usuário Teste',
      email: 'teste@seusite.com',
    

    cy.request('POST', 'https://api.seusite.com/usuario', newUser)
      .its('status')
      .should('equal', 201);
  });
});
Executando os Testes

Para executar os testes no modo interativo do Cypress, use o comando:
bash
Copiar código
npx cypress open
Para rodar os testes em modo headless (sem interface gráfica):
bash

npx cypress run
Para rodar os testes específicos de Web ou API, é possível rodar de acordo com o diretório de testes:
bash
npx cypress run --spec 'cypress/integration/web/*.spec.js'
npx cypress run --spec 'cypress/integration/api/*.spec.js'
Relatórios de Teste
Para gerar relatórios de execução de testes, você pode usar plugins como mochawesome ou cypress-mochawesome-reporter.

Instale o reporter:
bash

npm install mochawesome --save-dev
Configure no arquivo cypress.json para gerar o relatório:
json
Copiar código
{
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/reports",
    "overwrite": false,
    "html": true,
    "json": true
  }
}
Depois de rodar os testes, os relatórios estarão disponíveis em cypress/reports.

Contribuição
Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias para o projeto. Para contribuir, siga os passos abaixo:

Fork o repositório.
Crie uma branch para sua modificação (git checkout -b minha-modificacao).
Faça o commit das suas alterações (git commit -m 'Adicionando uma nova feature').
Envie para o repositório remoto (git push origin minha-modificacao).
Abra um Pull Request explicando suas alterações.
Projeto desenvolvido com foco em automação de testes de Web e API utilizando Cypress e boas práticas como BDD e Page Objects. Para mais detalhes, consulte a documentação oficial do Cypress e do Cucumber.

markdown
Copiar código

### Explicações adicionais:
- **Cypress com BDD**: Para integrar o Cucumber ao Cypress, o `@badeball/cypress-cucumber-preprocessor` é utilizado para interpretar os arquivos `.feature` que definem os cenários de teste.
- **Page Objects**: A ideia é que cada página do site ou da aplicação tenha uma representação em código, com métodos para interagir com os elementos da página.
- **Testes Web e API**: O README explica como escrever e rodar testes tanto para a interface web quanto para as APIs, utilizando os recursos do Cypress.

Esse README deve fornecer uma boa base para começar o projeto de automação!







