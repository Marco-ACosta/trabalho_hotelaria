Feature: Ação do check-out via app

    Scenario: Checkout quando chave física
        When: eu completar com sucesso o processo de selfie.
        And: eu completar com sucesso o processo de localização.
        Then: quando confirmar o checkout serei avisado de que devo entregar a chave física ao recepcionista.
        And: quando entregar a chave e o recepcionista confirmar o processo, poderei confirmar o checkout.
        But: antes terei que pagar quaisquer danos ou consumos realizados durante a estadia.

    Scenario: Checkout quando chave digital
        When: eu completar com sucesso o processo de selfie.
        And: eu completar com sucesso o processo de localização.
        Then: quando confirmar o checkout não poderei mais acessar o meu quarto com a senha anterior.
        But: antes terei que pagar quaisquer danos ou consumos realizados durante a estadia.