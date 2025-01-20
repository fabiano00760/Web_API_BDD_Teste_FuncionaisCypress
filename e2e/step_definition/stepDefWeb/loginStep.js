// Arquivo de teste
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../../pages/loginPage';
import homePage from '../../pages/homePage';

beforeEach(() => {
  // Usando cy.session() no beforeEach para preservar a sessão entre os testes
  cy.session('user-session', () => {
    cy.screenshot('page-inicial');
    loginPage.accessPage();
    loginPage.clickBtnUSer();
    loginPage.fillUser("standard_user");
    loginPage.fillPassword("secret_sauce");
    loginPage.CheckBox();
    loginPage.clickLogin();
  });
});

Given("estar na pagina de Login", () => {
  loginPage.accessPage(); // Garante que estamos na página de login
});

When('preencher o usuario {string}', (user) => {
  loginPage.clickBtnUSer();  // Ação para abrir o modal ou menu de login
  loginPage.fillUser(user);  // Preenche o campo do usuário
});

When('preencher a senha {string}', (password) => {
  loginPage.fillPassword(password);  // Preenche a senha
  loginPage.CheckBox();  // Marca o checkbox, se necessário
});

When('clicar em login', () => {
  loginPage.clickLogin();  // Clica no botão de login
});

Then('a pagina inicial aparece', () => {
  homePage.validateHome();  // Verifica se a página inicial foi carregada com sucesso
  cy.screenshot('Verifica se a página inicial foi carregada com sucesso');
});
