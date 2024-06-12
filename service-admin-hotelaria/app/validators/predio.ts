import vine from '@vinejs/vine'

export const criarPredioValidator = vine.compile(
  vine.object({
    nome: vine.string(),
    descricao: vine.string(),
    endereco: vine.object({
      numero: vine.number().withoutDecimals(),
      rua: vine.string(),
      complemento: vine.string(),
      cep: vine.string(),
      bairro: vine.string(),
      cidade: vine.string(),
      estado: vine.string(),
      pais: vine.string(),
    }),
  })
)
