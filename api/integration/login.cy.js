import 'cypress-plugin-api';


describe('Teste API - Login', () => {
  it('Deve realizar login com sucesso', () => {
    const email = "fabiano1735921335086@yahoo.com.br";  // Exemplo de email
    const password = 'Admin@827';       // Exemplo de senha

    cy.api({
      method: 'POST',
      url: 'https://serverest.dev/login',  // URL do endpoint
      headers: {
        accept: 'application/json',  // Cabeçalho Accept
        'Content-Type': 'application/json'  // Cabeçalho Content-Type
      },
      body: {
        email,      // Email para login
        password    // Senha para login
      }
    }).then((response) => {
      // Verificar a resposta
      expect(response.status).to.eq(200);  // Status HTTP 200
      expect(response.body).to.have.property('message', 'Login realizado com sucesso');  // Mensagem de sucesso
    });
  });
});
