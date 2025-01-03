import 'cypress-plugin-api';

describe('Teste API - Obter Usuário', () => {
    it('Deve retornar os dados do usuário com sucesso', () => {
    const userId = 'p4blGd3gumVVxr8P';  // ID do usuário
    const expectedEmail = 'fabiano1735921335086@yahoo.com.br'; // Email esperado
    const expectedName = 'fabiano@49'; // Nome esperado
    const expectedPassword = 'Admin@827'; // Senha esperada
   
  

      cy.api({
        method: 'GET',
        url: `https://serverest.dev/usuarios/${userId}`,  // URL com ID do usuário
        headers: {
          accept: 'application/json'  // Cabeçalho Accept
        }
      }).then((response) => {
        // Verificar a resposta
        expect(response.status).to.eq(200);  // Status HTTP 200
         // Validar se o email retornado é o esperado
        expect(response.body).to.have.property('email', expectedEmail);  // Valida o email
        expect(response.status).to.eq(200);  // Status HTTP 200
        expect(response.body).to.have.property('nome', expectedName);  // Verifica se o nome corresponde
        expect(response.body).to.have.property('password', expectedPassword);  // Verifica se a senha corresponde
      });
    });
  });
  