// Elementos e acoes juntas aqui

import 'cypress-xpath';


let user = "Teste123";
let password = "Teste@123456";

class LoginPage {
   
    accessPage(){
        cy.visit('/');
    }

    clickBtnUSer(){
        cy.xpath('//*[@id="menuUser"]').click();
    }
    fillUser(){
        cy.get('[name="username"]', { timeout: 30000 }).should("be.visible").type(user);    }

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