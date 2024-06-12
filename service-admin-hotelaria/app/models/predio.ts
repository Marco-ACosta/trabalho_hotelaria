import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Endereco from '#models/endereco'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Quarto from '#models/quarto'

export default class Predio extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare nome: string

  @column()
  declare descricao: string

  @column()
  declare id_endereco: string

  @belongsTo(() => Endereco, {
    foreignKey: 'id_endereco',
  })
  declare endereco: BelongsTo<typeof Endereco>

  @hasMany(() => Quarto)
  declare quartos: HasMany<typeof Quarto>
}
