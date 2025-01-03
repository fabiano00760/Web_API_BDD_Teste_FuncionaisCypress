import 'cypress-plugin-api';

describe('Teste API - Obter Usuário', () => {
    it('Deve retornar os dados do usuário com sucesso', () => {

  
      cy.api({
        method: 'POST',
        url: `https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/logout`,  // URL com ID do usuário
        headers: {
          accept: 'application/json',  // Cabeçalho Accept
          'Content-Type': 'application/json'  // Cabeçalho Content-Type
        },
        body: 
        {
          "accountId": "744751707",
          "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjo3NDQ3NTE3MDcsInN1YiI6IlRlc3RlMTIzIiwicm9sZSI6IlVTRVIifQ.eCFf-ZatRAQ_hX5O33k_KiseSGROseCcrrRfo1Xz45Y",
            "sessionId": "1942d2b3306@7E913111021^i%744751707"
        }
        
      }).then((response) => {
        // Verificar a resposta
        expect(response.status).to.eq(200);  // Status HTTP 200
      });
    });
  });
  