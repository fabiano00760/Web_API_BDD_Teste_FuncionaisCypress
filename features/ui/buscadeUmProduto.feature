Feature: Teste de Login com Persistência de Sessão

    Scenario: Login e busca de produto com sessão persistente
        Given que esteja logado com user autenticado
        When busco um produto no campo Search 
        When adiciono produto ao carrinho
        When for adicionado no carinho faço checkout
        Then apresenta aordem de pagamento 
