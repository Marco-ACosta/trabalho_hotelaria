import Endereco from '#models/endereco'
import Predio from '#models/predio'
import { criarPredioValidator } from '#validators/predio'
import type { HttpContext } from '@adonisjs/core/http'

export default class PrediosController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const predio = await Predio.query().preload('endereco')
    return response.ok({
      buildings: predio.map((p) => {
        return {
          id: p.id,
          name: p.nome,
          endereco: p.endereco,
        }
      }),
    })
  }

  /**
   * Display form to create a new record
   */
  // async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(criarPredioValidator)

    const endereco = await Endereco.create(data.endereco)
    const predio = await Predio.create({ ...data, id_endereco: endereco.id })
    await predio.load('endereco')
    return response.ok({
      building: {
        id: predio.id,
        name: predio.nome,
        address: predio.endereco,
      },
    })
  }

  /**
   * Show individual record
   */
  // async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  // async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  // async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  // async destroy({ params }: HttpContext) {}
}
