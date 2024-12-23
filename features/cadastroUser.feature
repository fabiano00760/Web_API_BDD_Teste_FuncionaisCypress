Feature: cadastro de usuario

  Scenario: cadastro de usuario
    Given que esteja na página de cadastro 
    When preencho o formulário de cadastro  
    And clico no btn de Registar
    Then o cadastro é realizado com sucesso
