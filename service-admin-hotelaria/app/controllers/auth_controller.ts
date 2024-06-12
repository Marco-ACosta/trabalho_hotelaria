import Usuario from '#models/usuario'
import { authValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async login({ request }: HttpContext) {
    const data = await request.validateUsing(authValidator)

    const usuario = await Usuario.verifyCredentials(data.email, data.senha)
    const token = await Usuario.accessTokens.create(usuario)

    return { token }
  }
}
