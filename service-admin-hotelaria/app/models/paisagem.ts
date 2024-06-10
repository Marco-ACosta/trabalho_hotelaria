import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Quarto from '#models/quarto'

export default class Paisagem extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare nome: string

  @column()
  declare descricao: string

  @column()
  declare id_quarto: string

  @belongsTo(() => Quarto)
  declare Quarto: BelongsTo<typeof Quarto>
}
