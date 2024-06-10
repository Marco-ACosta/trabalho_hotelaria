import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Setor extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare nome: string

  @column()
  declare descricao: string
}
