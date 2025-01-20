class Assertions {

    validationStatusCode200() {
        cy.get("@statusCode200").should((response) => {
            expect(response.status).to.eq(200);
        }); // Adicione um ponto-e-vírgula
    }

    validationResponse200() {
        cy.get("@getResponse200").should((response) => {
            const category = response.body[0];

            expect(category.products).to.exist;
            expect(category.products).to.be.an('array');

            if (category.products) {
                category.products.forEach((product) => {
                    expect(product.productName).to.include('Beats Studio 2 Over-Ear Matte Black Headphones');
                });
            }

        }); // Adicione um ponto-e-vírgula
    }

}

export default new Assertions();
