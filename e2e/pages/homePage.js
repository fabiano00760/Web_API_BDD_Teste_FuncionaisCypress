class HomePage {
    validateHome(){
        cy.contains('dvantage').should('be.visible');
    }


}
export default new HomePage();
