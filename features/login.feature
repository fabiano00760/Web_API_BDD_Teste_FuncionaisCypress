Feature: Pagina de Login
  Scenario: Login na Pagina  
    Given estar na pagina de Login
    When preencher o usuario "standard_user"
    When preencher a senha "secret_sauce"
    When clicar em login
    Then a pagina inicial aparece
