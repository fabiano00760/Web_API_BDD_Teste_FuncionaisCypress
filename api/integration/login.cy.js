import 'cypress-plugin-api';

describe('Teste API - Login', () => {
    it('should log in successfully', () => {
        cy.api({
            method: 'POST',
            url: 'https://serverest.dev/login', // URL da API de login
            body: {
                "email": "fabiano@teste.com",
                "password": "teste@123"
            }
        }).then((response) => {
            expect(response.status).to.eq(200);  // Verifica se o status é 200
            // Verificando se a resposta contém uma mensagem de sucesso
            expect(response.body).to.have.property('message').and.eq('Login realizado com sucesso');
        });
    });
});