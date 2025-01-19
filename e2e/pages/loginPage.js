import 'cypress-xpath';

class LoginPage {
  accessPage() {
    cy.visit('/');
  }

  clickBtnUSer() {
    cy.xpath('//*[@id="menuUser"]').click();
  }

  fillUser(user) {
    cy.get('[name="username"]', { timeout: 30000 }).should("be.visible").type(user);
  }

  fillPassword(password) {
    cy.get('[name="password"]').type(password);
  }

  CheckBox() {
    cy.get('[name="remember_me"]').click();
  }

  clickLogin() {
    cy.get('[id="sign_in_btn"]').click();
  }
}

export default new LoginPage();
