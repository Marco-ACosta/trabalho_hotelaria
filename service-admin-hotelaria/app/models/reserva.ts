import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Reserva extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare id_quarto: string

  @column()
  declare id_cliente: string

  @column()
  declare id_clientes_metodo_de_pagamento: string

  @column()
  declare data_checkin: Date

  @column()
  declare data_checkout: Date

  @column()
  declare valor_total: number
}
