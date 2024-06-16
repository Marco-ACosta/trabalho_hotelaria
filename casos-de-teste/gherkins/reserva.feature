Feature: Ação da reserva via app

    Scenario: Listagem de quartos
        When: eu acessar a tela de listagem de quartos.
        Then: verei diversas informações sobre os quartos.
        And: poderei filtrar os quartos por atributos dos mesmos.

    Scenario: Informações de um quarto
        When: quando selecionar um quarto.
        Then: verei todas as informações sobre o mesmo.
        And: poderei reserva-lo, caso disponível, no botão "reservar".

    # Caminho Feliz
    Scenario: Reservar um quarto
        Given: que eu tenha o cadastro completo realizado.
        When: selecionar um quarto.
        And: reservar o mesmo.
        Then: deverei informar os dias da estadia e a forma de pagamento.

    # Caminho Triste
    Scenario: Reservar um quarto
        Given: que eu NÃO tenha o cadastro completo realizado.
        When: selecionar um quarto
        And: reservar o mesmo
        Then: serei redirecionado para outra tela onde deverei finalizar meu cadastro completo.

    # Caminho Feliz
    Scenario: Confirmar reserva quando pagamento online
        Given: que eu tenha reservado um quarto.
        When: confirmar o pagamento online.
        Then: receberei seja código pix, boleto por email ou cobrança via cartão.
        And: quando o pagamento for confirmado pelo banco, mesmo demorando no caso do boleto a reserva será confirmada.

    # Caminho Triste
    Scenario: Confirmar reserva quando pagamento online
        Given: que eu tenha reservado um quarto.
        When: confirmar o pagamento online.
        Then: receberei seja código pix, boleto por email ou cobrança via cartão.
        And: o banco recusar o pagamento ou eu não pagar, a reserva será cancelada.

    Scenario: Confirmar reserva quando pagamento presencial
        Given: que eu tenha reservado um quarto.
        When: confirmar o pagamento presencial.
        Then: o sistema confirmará a reserva imediatamente.
        But: perderei a reserva e serei multado caso não apareça no hotel no dia reservado ou cancele dentro de 24hrs antes do primeiro dia da reserva.