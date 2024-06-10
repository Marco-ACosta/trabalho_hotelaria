import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import Endereco from '#models/endereco'
import type { HasMany, HasOne } from '@adonisjs/lucid/types/relations'
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

  @hasOne(() => Endereco)
  declare Endereco: HasOne<typeof Endereco>

  @hasMany(() => Quarto)
  declare quartos: HasMany<typeof Quarto>
}
