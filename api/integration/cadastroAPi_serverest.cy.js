import 'cypress-plugin-api';


describe('Teste API - Criação de Usuário', () => {

  // Função para gerar um e-mail dinâmico
  const generateEmail = () => {
    const timestamp = Date.now(); // Timestamp para garantir que o e-mail seja único
    return `fabiano${timestamp}@yahoo.com.br`;
  };

  const generatelastName = () => {
    const randomName = `fabiano@${Math.floor(Math.random() * 1000)}`; // Adiciona um número aleatório ao nome
    return randomName;
  };

  // Função para gerar um nome de login dinâmico
  const generateName = () => {
    const randomName = `Fabiano@${Math.floor(Math.random() * 100)}`; // Adiciona um número aleatório ao nome
    return randomName;
  };
0
  const loginName = () => {
    const randomName = `teste${Math.floor(Math.random() * 100)}`; // Adiciona um número aleatório ao nome
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
      firstName: generatelastName(),
      loginName: loginName(),

    };
  
    cy.api({
      method: 'POST',
      url: 'https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/register',
      failOnStatusCode: false,  // Prevents the test from failing on 4xx or 5xx status codes
      body: {
        "accountType": "USER",
        "address": "rua lopes freire",
        "allowOffersPromotion": true,
        "aobUser": true,
        "cityName": "string",
        "country": "AUSTRALIA_AU",
        "email": userData.email,
        "firstName": userData.Name,
        "lastName": userData.firstName,
        "loginName": userData.loginName,
        "password": userData.password,
        "phoneNumber": "11982576455",
        "stateProvince": "são paulo",
        "zipcode": "04851301"
      },
    }).then((response) => {
      console.log(response); // Output the full response to inspect further
      expect(response.status).to.eq(200); // Assert a successful response if appropriate
    });
    
  });
});
