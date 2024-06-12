import Quarto from '#models/quarto'
import { criarQuartoValidator } from '#validators/quarto'
import type { HttpContext } from '@adonisjs/core/http'

export default class QuartosController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const quartos = await Quarto.query().preload('predio')
    return response.ok({
      rooms: quartos.map((q) => {
        return {
          id: q.id,
          name: q.numero,
          status: {
            value: q.disponivel,
            description: q.disponivel ? 'disponivel' : 'indisponível',
          },
          building: {
            id: q.predio.id,
            name: q.predio.nome,
          },
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
  async store({ request }: HttpContext) {
    const data = await request.validateUsing(criarQuartoValidator)

    const quarto = await Quarto.create(data)
    return quarto
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const id = params.id
    const quarto = await Quarto.query()
      .where('id', id)
      .preload('predio', (query) => query.preload('endereco'))
      .firstOrFail()

    return response.ok({
      room: {
        id: quarto.id,
        name: quarto.numero,
        status: {
          value: quarto.disponivel,
          description: quarto.disponivel ? 'disponivel' : 'indisponível',
        },
        tags: [
          {
            description: 'Tem sacada',
            status: quarto.tem_sacada,
          },
          {
            desciption: 'Aceita pet',
            status: quarto.pode_animais,
          },
        ],
        building: {
          id: quarto.predio.id,
          name: quarto.predio.nome,
          address: {
            id: quarto.predio.endereco.id,
            state: quarto.predio.endereco.estado,
            city: quarto.predio.endereco.cidade,
            cep: quarto.predio.endereco.cep,
            street: quarto.predio.endereco.rua,
            number: quarto.predio.endereco.numero,
            neighborhood: quarto.predio.endereco.bairro,
          },
        },
      },
    })
  }

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
