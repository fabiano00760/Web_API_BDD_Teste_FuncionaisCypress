Feature: Pagina de Login

  Scenario: Login na Pagina
    Given estar na pagina de Login
    When preencher o usuario "fabiano55"
    When preencher a senha "Admin@839"
    When clicar em login
    Then a pagina inicial aparece
