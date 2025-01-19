import 'cypress-xpath';
import homePage from "../pages/homePage";

class buscaDeUmProduto {
    // Remover o cy.session() daqui, pois a sessão já foi criada no ciclo de vida do teste
    accessPage() {
        cy.visit('/');  // Visita diretamente a página de busca, pois a sessão já está salva
    }

    buscar() {
        cy.xpath('//*[@id="mobileSearch"]/input').should('exist').and('be.visible');
    }

    campoSearch() {
        cy.get('[name="mobile_search"]').type("HP PRO TABLET 608 G1");
        cy.wait(1000);
    }

    btnLupa() {
        cy.xpath("(//*[@id='menuSearch'])[2]").first().click({force: true});
        cy.wait(1000);
    }

    validacao() {
        cy.xpath("//nav[contains(@class,'pages categoryDataFixedNav')]").should('be.visible').and('contain', 'HP PRO TABLET 608 G1');
        cy.wait(1000);
    }

    addShop_now() {
        cy.xpath("//label[@translate='SHOP_NOW']").first().trigger('mouseover');
        cy.wait(1000);
        cy.xpath("//label[@translate='SHOP_NOW']").first().click({ force: true });
    }

    btnaddtocart() {
        cy.wait(1000);
      //  cy.contains('ADD TO CART').should('be.visible').click({ force: true });
        cy.xpath("//button[contains(.,'ADD TO CART')]").first().click({force: true});
    }

    checkout(){
        cy.xpath("//button[@id='checkOutPopUp']").click({force: true});
        cy.wait(1000);
    }

    btnRegistration(){
        cy.wait(1000);
        cy.xpath("//*[@id='shoppingCartLink']").click({force: true});
        cy.wait(1000);
    }

    orberPayment(){
        cy.xpath("//button[@translate='NEXT']").click({force: true});
        cy.contains('dvORDER PAYMENTe').should('be.visible');
        cy.wait(1000);
    }


   validateOrder_payment(){
    cy.contains('HP PRO TABLET 608 G1').should('be.visible');
}


}
    
export default new buscaDeUmProduto();
