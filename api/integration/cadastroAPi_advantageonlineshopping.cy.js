import 'cypress-plugin-api';

export const apiConfig = {
  url: 'https://jsonplaceholder.typicode.com/users', // Exemplo de URL de API
};

describe('Teste API - Criação de Usuário', () => {

  // Função para gerar um e-mail dinâmico
  const generateEmail = () => {
    const timestamp = Date.now(); // Timestamp para garantir que o e-mail seja único
    return `fabiano${timestamp}@yahoo.com.br`;
  };



  // Função para gerar um nome de login dinâmico
  const generateName = () => {
    const randomName = `fabiano${Math.floor(Math.random() * 100)}`; // Adiciona um número aleatório ao nome
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
      loginName: generateName(),
      password: generatePassword(),
      lastName:generateName(),
    };
  
    cy.api({
      method: 'POST',
      url: 'https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/register', // URL correta da API
      body: {
        "accountType": "USER",
        "address": "string",
        "allowOffersPromotion": true,
        "aobUser": true,
        "cityName": "string",
        "country": "AUSTRALIA_AU",
        email:userData.email,
        "firstName": "string",
        lastName: userData.lastName,
        loginName: userData.loginName,
        password: userData.password,
        "phoneNumber": "string",
        "stateProvince": "string",
        "zipcode": "string"
      },
    }).then((response) => {
      expect(response.status).to.eq(200);  // Verifica se o status é 201
  
    });
  });


});
