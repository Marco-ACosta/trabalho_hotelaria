import vine from '@vinejs/vine'

export const criarQuartoValidator = vine.compile(
  vine.object({
    nome: vine.string(),
    descricao: vine.string(),
    qtd_banheiros: vine.number().withoutDecimals(),
    numero: vine.number().withoutDecimals(),
    andar: vine.number().withoutDecimals(),
    valor_diaria: vine.number(),
    tem_sacada: vine.boolean(),
    tem_ar_condicionado: vine.boolean(),
    pode_animais: vine.boolean(),
    disponivel: vine.boolean(),
    id_predio: vine.string(),
  })
)
