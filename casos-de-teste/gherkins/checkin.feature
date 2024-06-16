Feature: Ação do check-in via app.

    # Caminho Feliz
    Scenario: Botão de selfie.
        Given: que eu nunca tenha realizado um check-in enquanto logado na mesma conta.
        When: eu acessar a tela de check-in e pressionar o botão de selfie.
        Then: a câmera será solicitada pelo app e aceitarei, quando eu abrir eu poderei registrar uma foto minha.
        And: o sistema irá validar a minha imagem e confirmar minha identidade.
        And: o botão de selfie ficará com "check" indicando sucesso.
        And: o botão de acesso a chave do quarto ficará disponível SE eu também completar o processo do botão de localização.
        But: o processo do botão de selfie será cancelado se eu negar acesso a câmera.

    # Caminho Triste
    Scenario: Botão de selfie.
        Given: que eu nunca tenha realizado um check-in enquanto logado na mesma conta.
        And: eu NÃO seja a mesma pessoa logada no sistema.
        When: eu acessar a tela de check-in e pressionar o botão de selfie.
        Then: a câmera será solicitada pelo app e aceitarei, quando eu abrir eu poderei registrar uma foto minha.
        And: o sistema irá validar a minha imagem e NÃO irá confirmar minha identidade.
        And: uma mensagem informando falha na identicação será exibida e retornarei a tela de check-in.
        But: o processo do botão de selfie será cancelado se eu negar acesso a câmera.

    # Caminho Feliz
    Scenario: Botão de localização (GPS).
        Given: que eu nunca tenha realizado um check-in enquanto logado na mesma conta.
        When: eu acessar a tela de login e pressionar o botão de localização.
        Then: o aplicativo solicitará acesso ao GPS de meu celular e eu aceitarei.
        And: o sistema através do GPS confirmará minha localzação no hotel.
        And: o botão de localização ficará com "check" indicando sucesso.
        And: o botão de acesso a chave do quarto ficará disponível SE eu também completar o processo do botão de selfie.
        But: se eu negar acesso ao GPS o processo é cancelado.

    # Caminho Triste
    Scenario: Botão de localização (GPS).
        Given: que eu nunca tenha realizado um check-in enquanto logado na mesma conta.
        And: eu NÃO esteja geograficamente próximo ao hotel.
        When: eu acessar a tela de login e pressionar o botão de localização.
        Then: o aplicativo solicitará acesso ao GPS de meu celular e eu aceitarei.
        And: o sistema através do GPS NÃO confirmará minha localzação no hotel.
        And: uma mensagem informando falha na confirmação da minha localização será exibida e eu tornarei a tela de check-in.
        But: se eu negar acesso ao GPS o processo é cancelado.

    Scenario: Botão de acesso a chave do quarto quando o hotel possui TRANCA DIGITAL.
        Given: que eu nunca tenha realizado um check-in enquanto logado na mesma conta.
        And: eu tenha realizado com sucesso os processos dos botões de selfie e localização.
        When: eu pressionar o botão de acesso a chave do quarto.
        Then: o aplicativo me redirecionará para a tela com a senha da tranca digital.

    Scenario: Botão de acesso a chave do quarto quando o hotel possui TRANCA FÍSICA.
        Given: que eu nunca tenha realizado um check-in enquanto logado na mesma conta.
        And: eu tenha realizado com sucesso os processos dos botões de selfie e localização.
        When: eu pressionar o botão de acesso a chave do quarto.
        Then: o aplicativo me redirecionará para a tela com a instrução de entrar em contato com o recepcionista para retirar a chave.

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
    Scenario: Tela de check-in.
        Given: que eu nunca tenha realizado um check-in enquanto logado na mesma conta.
        And: eu possua uma reserva confirmada.
        When: eu acessar a tela de check-in.
        Then: o botão de selfie estará disponível e com um "xis" indicando que o seu processo não foi feito,
        And: o botão de localização estará disponível e com um "xis" indicando que o seu processo não foi feito,
        And: o botão de acesso a chave do quarto estará bloqueado e com cor apagada.

    # Caminho Triste
    Scenario: Tela de check-in.
        Given: que eu nunca tenha realizado um check-in enquanto logado na mesma conta.
        And: eu NÃO possua uma reserva confirmada.
        When: eu acessar a tela de check-in.
        Then: uma imagem com uma mensagem informando que não possuo nenhuma reserva para realizar check-in será exibida.

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
