import vine from '@vinejs/vine'

export const authValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    senha: vine.string(),
  })
)
