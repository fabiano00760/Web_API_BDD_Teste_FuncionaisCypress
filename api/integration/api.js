// cypress/support/api.js

class API {
    // Método que realiza uma requisição GET
    static fazerRequisicaoGET(url) {
      return cy.request('GET', url);
    }
  
    // Método que realiza uma requisição POST
    static fazerRequisicaoPOST(url, body) {
      return cy.request('POST', url, body);
    }
  
    // Método que realiza uma requisição PUT
    static fazerRequisicaoPUT(url, body) {
      return cy.request('PUT', url, body);
    }
  
    // Método que realiza uma requisição DELETE
    static fazerRequisicaoDELETE(url) {
      return cy.request('DELETE', url);
    }
  
    // Método que realiza uma requisição PATCH
    static fazerRequisicaoPATCH(url, body) {
      return cy.request('PATCH', url, body);
    }
    
    // Método para fazer uma autenticação simples (caso seja necessário)
    static autenticar(url, username, password) {
      return cy.request({
        method: 'POST',
        url: url,
        body: {
          username: username,
          password: password
        },
        auth: {
          username: username,
          password: password
        }
      });
    }
  }
  
  export default API;
  