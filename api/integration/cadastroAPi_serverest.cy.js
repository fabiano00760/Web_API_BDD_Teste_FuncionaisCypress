import 'cypress-plugin-api';


describe('Teste API - Criação de Usuário', () => {

  // Função para gerar um e-mail dinâmico
  const generateEmail = () => {
    const timestamp = Date.now(); // Timestamp para garantir que o e-mail seja único
    return `fabiano${timestamp}@yahoo.com.br`;
  };



  // Função para gerar um nome de login dinâmico
  const generateName = () => {
    const randomName = `fabiano@${Math.floor(Math.random() * 1000)}`; // Adiciona um número aleatório ao nome
    return randomName;
  };

  // Função para gerar uma senha dinâmica
  const generatePassword = () => {
    const randomNumber = Math.floor(Math.random() * 1000); // Gerar número aleatório para a senha
    return `Admin@${randomNumber}`;
  };

  let userData = {}; // Objeto para armazenar email, firstName, password

  it('Deve criar um novo usuário', () => {
    // Gerar os dados do usuário
    userData = {
      email: generateEmail(),
      Name: generateName(),
      password: generatePassword(),
    };
  
    cy.api({
      method: 'POST',
      url: 'https://serverest.dev/usuarios', // URL correta da API
      body: {
        email: userData.email,  // E-mail gerado dinamicamente
        nome: userData.Name,    // Alterado de 'Name' para 'nome'
        password: userData.password,  // Senha gerada dinamicamente
        administrador: "true",   // Valor correto para administrador
      },
    }).then((response) => {
      expect(response.status).to.eq(201);  // Verifica se o status é 201
    });
  });


});
