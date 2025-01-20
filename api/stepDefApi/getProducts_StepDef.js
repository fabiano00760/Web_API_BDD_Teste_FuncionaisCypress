import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import RequestProductGET from '../../APIs/getProduct'
import Assertions from '../../APIs/Assertions'
import '@bahmutov/cy-api'

let endpoint;

Given('que eu preciso enviar uma requisição para Beats', () => {
})

When('enviar requisição método get', () => {
    RequestProductGET.requestGet();
})

Then('status code esperado 200 sucesso', () => {
    Assertions.validationStatusCode200();
    Assertions.validationResponse200();
})



