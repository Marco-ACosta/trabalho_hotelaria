import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Predio from '#models/predio'
import Foto from '#models/foto'
import Paisagem from '#models/paisagem'
import Reserva from '#models/reserva'

export default class Quarto extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare nome: string

  @column()
  declare descricao: string

  @column()
  declare qtd_banheiros: number

  @column()
  declare qtd_camas: number

  @column()
  declare numero: number

  @column()
  declare andar: number

  @column()
  declare valor_diaria: number

  @column()
  declare tem_sacada: boolean

  @column()
  declare tem_ar_condicionado: boolean

  @column()
  declare pode_animais: boolean

  @column()
  declare disponivel: boolean

  @column()
  declare id_predio: string

  @belongsTo(() => Predio, { foreignKey: 'id_predio' })
  declare predio: BelongsTo<typeof Predio>

  @hasMany(() => Foto)
  declare fotos: HasMany<typeof Foto>

  @hasMany(() => Paisagem)
  declare paisagens: HasMany<typeof Paisagem>

  @hasMany(() => Reserva)
  declare reservas: HasMany<typeof Reserva>
}
