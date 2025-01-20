class RequestProductGET {

    requestGet() {
        const endpoint = `/catalog/api/v1/products/search?name=Beats`;
        cy.api({
            url: endpoint,
            method: 'GET',
            failOnStatusCode: false
        }).as("getResponse200");

        cy.get("@getResponse200").its("status").as("statusCode200"); // Pegue o status code separado
    }

}
export default new RequestProductGET();
