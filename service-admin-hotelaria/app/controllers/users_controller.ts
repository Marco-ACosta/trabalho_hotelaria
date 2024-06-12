import Usuario from '#models/usuario'
import { criarUsuarioValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const users = await Usuario.query().preload('tipoUsuario')
    return response.ok({
      workers: users.map((user) => {
        return {
          id: user.id,
          nome: user.nome,
          role: user.tipoUsuario.nome,
        }
      }),
    })
  }

  // /**
  //  * Display form to create a new record
  //  */
  // async create({}: HttpContext) {}

  // /**
  //  * Handle form submission for the create action
  //  */
  async store({ request }: HttpContext) {
    const data = await request.validateUsing(criarUsuarioValidator)

    const usuario = await Usuario.create(data)

    return { usuario }
  }

  /**
   * Show individual record
   */
  //   async show({ params }: HttpContext) {}

  //   /**
  //    * Edit individual record
  //    */
  //   async edit({ params }: HttpContext) {}

  //   /**
  //    * Handle form submission for the edit action
  //    */
  //   async update({ params, request }: HttpContext) {}

  //   /**
  //    * Delete record
  //    */
  //   async destroy({ params }: HttpContext) {}
}
