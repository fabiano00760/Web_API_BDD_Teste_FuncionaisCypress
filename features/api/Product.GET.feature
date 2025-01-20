Feature:Request Method GET API Product

Scenario: Request Endpoint Seach Product
    Given que eu preciso enviar uma requisição para Beats
    When enviar requisição método get
    Then status code esperado 200 sucesso

