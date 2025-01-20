import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import buscaDeUmProduto from "../../pages/buscaDeUmProdutoPage";
import loginPage from "../../pages/loginPage";


Given("que esteja logado com user autenticado", () => {
   buscaDeUmProduto.accessPage();
   buscaDeUmProduto.buscar();
});

When("busco um produto no campo Search", () => {
    buscaDeUmProduto.campoSearch();
    buscaDeUmProduto.btnLupa();
    buscaDeUmProduto.validacao();}); 

When("adiciono produto ao carrinho", () => {
    buscaDeUmProduto.addShop_now();
    buscaDeUmProduto.btnaddtocart();

});

When("for adicionado no carinho faço checkout", () => {
    buscaDeUmProduto.checkout();
}); 


Then("apresenta aordem de pagamento", () => {
     buscaDeUmProduto.btnRegistration();
   //  buscaDeUmProduto.orberPayment();
      buscaDeUmProduto.validateOrder_payment();
  }); 


