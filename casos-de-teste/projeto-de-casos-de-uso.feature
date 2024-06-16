Feature: Ação do check-in via app.

    # Caminho Feliz
    @teste-1-1
    Scenario: Botão de selfie.
        Given: que eu nunca tenha realizado um check-in enquanto logado na mesma conta.
        When: eu acessar a tela de check-in e pressionar o botão de selfie.
        Then: a câmera será solicitada pelo app e aceitarei, quando eu abrir eu poderei registrar uma foto minha.
        And: o sistema irá validar a minha imagem e confirmar minha identidade.
        And: o botão de selfie ficará com o fundo na cor verde.
        And: o botão de acesso a chave do quarto ficará disponível e na cor de fundo amarela SE eu também completar o processo do botão de localização.
        But: o processo do botão de selfie será cancelado se eu negar acesso a câmera.

    # Caminho Triste
    @teste-1-2
    Scenario: Botão de selfie.
        Given: que eu nunca tenha realizado um check-in enquanto logado na mesma conta.
        And: eu NÃO seja a mesma pessoa logada no sistema.
        When: eu acessar a tela de check-in e pressionar o botão de selfie.
        Then: a câmera será solicitada pelo app e aceitarei, quando eu abrir eu poderei registrar uma foto minha.
        And: o sistema irá validar a minha imagem e NÃO irá confirmar minha identidade.
        And: uma mensagem informando falha na identicação será exibida e retornarei a tela de check-in.
        But: o processo do botão de selfie será cancelado se eu negar acesso a câmera.

    # Caminho Feliz
    @teste-1-3
    Scenario: Botão de localização (GPS).
        Given: que eu nunca tenha realizado um check-in enquanto logado na mesma conta.
        When: eu acessar a tela de login e pressionar o botão de localização.
        Then: o aplicativo solicitará acesso ao GPS de meu celular e eu aceitarei.
        And: o sistema através do GPS confirmará minha localzação no hotel.
        And: o botão de localização ficará com o fundo na cor verde.
        And: o botão de acesso a chave do quarto ficará disponível e na cor de fundo amarela SE eu também completar o processo do botão de selfie.
        But: se eu negar acesso ao GPS o processo é cancelado.

    # Caminho Triste
    @teste-1-4
    Scenario: Botão de localização (GPS).
        Given: que eu nunca tenha realizado um check-in enquanto logado na mesma conta.
        And: eu NÃO esteja geograficamente próximo ao hotel.
        When: eu acessar a tela de login e pressionar o botão de localização.
        Then: o aplicativo solicitará acesso ao GPS de meu celular e eu aceitarei.
        And: o sistema através do GPS NÃO confirmará minha localzação no hotel.
        And: uma mensagem informando falha na confirmação da minha localização será exibida e eu tornarei a tela de check-in.
        But: se eu negar acesso ao GPS o processo é cancelado.

    @teste-1-5
    Scenario: Botão de acesso a chave do quarto quando o hotel possui TRANCA DIGITAL.
        Given: que eu nunca tenha realizado um check-in enquanto logado na mesma conta.
        And: eu tenha realizado com sucesso os processos dos botões de selfie e localização.
        When: eu pressionar o botão de acesso a chave do quarto.
        Then: o aplicativo me redirecionará para a tela com a senha da tranca digital.

    @teste-1-6
    Scenario: Botão de acesso a chave do quarto quando o hotel possui TRANCA FÍSICA.
        Given: que eu nunca tenha realizado um check-in enquanto logado na mesma conta.
        And: eu tenha realizado com sucesso os processos dos botões de selfie e localização.
        When: eu pressionar o botão de acesso a chave do quarto.
        Then: o aplicativo me redirecionará para a tela com a instrução de entrar em contato com o recepcionista para retirar a chave.

    @teste-1-7
    Scenario: Botão de acesso a chave do quarto quando o hotel possui TRANCA FÍSICA.
        Given: que o botão de acesso a chave do quarto esteja disponível.
        And: eu <chave_retirada> retirado a chave do quarto.
        When: eu pressionar o botão de acesso a chave do quarto.
        Then: será apresentada a mensagem: <mensagem>.

        Examples:
            | chave_desbloqueada | mensagem                                                                        |
            | tenha              | "Você já retirou a chave com o recepcionista, em caso de problemas contate-o." |
            | não tenha          | "Entre em contato com o recepcionista para a retirada da chave."                |

    # Caminho Feliz
    @teste-1-8
    Scenario: Tela de check-in.
        Given: que eu nunca tenha realizado um check-in enquanto logado na mesma conta.
        And: eu possua uma reserva confirmada.
        When: eu acessar a tela de check-in.
        Then: o botão de selfie estará disponível e com cor de fundo amarela,
        And: o botão de localização estará disponível e com cor de fundo amarela,
        And: o botão de acesso a chave do quarto estará bloqueado e com cor de fundo cinza.

    # Caminho Triste
    @teste-1-9
    Scenario: Tela de check-in.
        Given: que eu nunca tenha realizado um check-in enquanto logado na mesma conta.
        And: eu NÃO possua uma reserva confirmada.
        When: eu acessar a tela de check-in.
        Then: uma imagem com uma mensagem informando que não possuo nenhuma reserva para realizar check-in será exibida.

    @teste-1-10
    Scenario: Botão de acesso a chave do quarto.
        Given: que eu esteja na tela de check-in.
        When: eu pressionar o botão de acesso a chave do quarto.
        And: eu <ação_selfie_feita> realizado a selfie,
        And: eu <ação_gps_feita> confirmado minha localização,
        Then: será apresentado <result>.

        Examples:
            | ação_selfie_feita | ação_gps_feita | result                                |
            | tenha             | tenha          | a chave do quarto                     |
            | não tenha         | tenha          | erro no botão de selfie               |
            | tenha             | não tenha      | erro no botão de localização          |
            | não tenha         | não tenha      | erro no botão de selfie e localização |

Feature: Ação do check-out via app

    @teste-2-1
    Scenario: Checkout quando chave física
        When: eu completar com sucesso o processo de selfie.
        And: eu completar com sucesso o processo de localização.
        Then: quando confirmar o checkout serei avisado de que devo entregar a chave física ao recepcionista.
        And: quando entregar a chave e o recepcionista confirmar o processo, poderei confirmar o checkout.
        But: antes terei que pagar quaisquer danos ou consumos realizados durante a estadia.

    @teste-2-2
    Scenario: Checkout quando chave digital
        When: eu completar com sucesso o processo de selfie.
        And: eu completar com sucesso o processo de localização.
        Then: quando confirmar o checkout não poderei mais acessar o meu quarto com a senha anterior.
        But: antes terei que pagar quaisquer danos ou consumos realizados durante a estadia.

Feature: Ação da reserva via app

    @teste-3-1
    Scenario: Listagem de quartos
        When: eu acessar a tela de listagem de quartos.
        Then: verei diversas informações sobre os quartos.
        And: poderei filtrar os quartos por atributos dos mesmos.

    @teste-3-2
    Scenario: Informações de um quarto
        When: quando selecionar um quarto.
        Then: verei todas as informações sobre o mesmo.
        And: poderei reserva-lo, caso disponível, no botão "reservar".

    # Caminho Feliz
    @teste-3-3
    Scenario: Reservar um quarto
        Given: que eu tenha o cadastro completo realizado.
        When: selecionar um quarto.
        And: reservar o mesmo.
        Then: deverei informar os dias da estadia e a forma de pagamento.

    # Caminho Triste
    @teste-3-4
    Scenario: Reservar um quarto
        Given: que eu NÃO tenha o cadastro completo realizado.
        When: selecionar um quarto
        And: reservar o mesmo
        Then: serei redirecionado para outra tela onde deverei finalizar meu cadastro completo.

    # Caminho Feliz
    @teste-3-5
    Scenario: Confirmar reserva quando pagamento online
        Given: que eu tenha reservado um quarto.
        When: confirmar o pagamento online.
        Then: receberei seja código pix, boleto por email ou cobrança via cartão.
        And: quando o pagamento for confirmado pelo banco, mesmo demorando no caso do boleto a reserva será confirmada.

    # Caminho Triste
    @teste-3-6
    Scenario: Confirmar reserva quando pagamento online
        Given: que eu tenha reservado um quarto.
        When: confirmar o pagamento online.
        Then: receberei seja código pix, boleto por email ou cobrança via cartão.
        And: o banco recusar o pagamento ou eu não pagar, a reserva será cancelada.

    @teste-3-7
    Scenario: Confirmar reserva quando pagamento presencial
        Given: que eu tenha reservado um quarto.
        When: confirmar o pagamento presencial.
        Then: o sistema confirmará a reserva imediatamente.
        But: perderei a reserva e serei multado caso não apareça no hotel no dia reservado ou cancele dentro de 24hrs antes do primeiro dia da reserva.
