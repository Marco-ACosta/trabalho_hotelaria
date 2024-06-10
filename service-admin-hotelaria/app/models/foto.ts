import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Quarto from '#models/quarto'
export default class Foto extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare url: string

  @column()
  declare nome: string

  @column()
  declare descricao: string

  @column()
  declare id_quarto: string

  @belongsTo(() => Quarto)
  declare quarto: BelongsTo<typeof Quarto>
}
