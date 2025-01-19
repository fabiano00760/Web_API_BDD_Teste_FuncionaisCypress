import 'cypress-plugin-api';

describe('Listar_Produtos', () => {
    it('should log in successfully', () => {
        cy.api({
            method: 'GET',
            url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products'
    
        }).then((response) => {
            expect(response.status).to.eq(200);  // Verifica se o status é 200
              
        });
    });
});