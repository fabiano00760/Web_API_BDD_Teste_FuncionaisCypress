import 'cypress-plugin-api';

describe('Teste API - Login', () => {
    it('should log in successfully', () => {
        cy.api({
            method: 'POST',
            url: 'https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/login', // URL da API de login
            body: {
                "email": "fabiano1737293215564@yahoo.com.br",
                "loginPassword": "Admin@488",
                "loginUser": "fabiano15"
              }
        }).then((response) => {
            expect(response.status).to.eq(200);  // Verifica se o status é 200
              // Validando a mensagem 'reason'
            expect(response.body.statusMessage.reason).to.eq('Login Successful');
        });
    });
});