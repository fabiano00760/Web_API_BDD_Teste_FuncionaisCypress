import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import '@bahmutov/cy-api'
import RequestProductPOST from '../../APIs/postProduct';
import Assertions from '../../APIs/Assertions'

const endpoint = '/catalog/api/v1/product/image/821194126/%23FFFFF/WHITE';
let token;


Given('que eu preciso enviar uma requisição', () => {
});

When('enviar requisição método POST', () => {
    RequestProductPOST.requestPost200();
})

Then('status code esperado 200 sucesso', () => {
    Assertions.validationStatusCode200();
})



