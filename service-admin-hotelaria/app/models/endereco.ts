import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Endereco extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare numero: number

  @column()
  declare rua: string

  @column()
  declare complemento: string

  @column()
  declare cep: string

  @column()
  declare bairro: string

  @column()
  declare cidade: string

  @column()
  declare estado: string

  @column()
  declare pais: string
}
