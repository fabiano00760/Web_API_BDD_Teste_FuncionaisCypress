import 'cypress-plugin-api';

describe('Teste API - Obter Usuário', () => {
    it('Deve retornar os dados do usuário com sucesso', () => {
    const userId = '0S7WFu9Gtj6l2qeU';  // ID do usuário
    const expectedEmail = 'fabiano1735498992430@yahoo.com.br'; // Email esperado
    const expectedName = 'fabiano@312'; // Nome esperado
    const expectedPassword = 'Admin@656'; // Senha esperada
    const expectedAdmin = true; // Administrador esperado (booleano)
    const expectedId = '0S7WFu9Gtj6l2qeU'; // ID esperado

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
  