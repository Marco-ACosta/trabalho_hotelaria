import vine from '@vinejs/vine'

export const criarUsuarioValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    senha: vine.string(),
    nome: vine.string(),
    cpf: vine.string(),
    id_tipo_usuario: vine.string(),
    id_setor: vine.string(),
  })
)
