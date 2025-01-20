class RequestProductPost {

    token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjo4MjExOTQxMjYsInN1YiI6IlRlc3RlMDQiLCJyb2xlIjoiQURNSU4ifQ.d0bKXPrcL0OSJSBU65mBaLOCFw5WVUbT8zBKisYOCIU';

    requestPost200() {
        const endpoint = '/catalog/api/v1/product/image/821194126/%23FFFFF/WHITE';
    
        cy.fixture('produto.jpg', 'binary').then((image) => {
            const blob = Cypress.Blob.binaryStringToBlob(image, 'image/jpeg');
            const formData = new FormData();
            formData.append('file', blob, 'produto.jpg');
        
            cy.api({
              method: 'POST',
              url: `${endpoint}?product_id=15`,
              headers: {
                Authorization: this.token
              },
              body: formData,
              formData: true,
              failOnStatusCode: false
            }).as("getResponse200");
            
            cy.get("@getResponse200").its("status").as("statusCode200"); // Pegue o status code separado
          });
    }

}

export default new RequestProductPost();
