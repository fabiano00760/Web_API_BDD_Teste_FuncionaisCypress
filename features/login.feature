Feature: Pagina de Login
  Scenario: Login na Pagina  
    Given estar na pagina de Login
    When preencher o usuario "AdminTeste"
    When preencher a senha "Admin12356@"
    When clicar em login
    Then a pagina inicial aparece


