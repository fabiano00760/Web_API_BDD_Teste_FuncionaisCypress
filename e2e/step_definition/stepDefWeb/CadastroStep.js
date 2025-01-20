import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import cadastroPage from '../../pages/cadastroPage';
import homePage from "../../pages/homePage";

Given("que esteja na página de cadastro", () => {
    cadastroPage.accessPage();
    cadastroPage.clickBtnUSer();
    cadastroPage.createNewAccount();
});

When("preencho o formulário de cadastro", () => {
    cadastroPage.fillName();
    cadastroPage.fillEmail();
    cadastroPage.fillPassword();
    cadastroPage.confirmPassword();
    cadastroPage.CheckBox();
});

When("clico no btn de Registar", () => {
    cadastroPage.btnResister();
});

Then('o cadastro é realizado com sucesso', ()=>{
    homePage.validateHome();
})