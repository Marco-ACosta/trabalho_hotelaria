import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, belongsTo, column, hasOne } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import Setor from '#models/setor'
import TipoUsuario from '#models/tipo_usuario'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'senha',
})

export default class Usuario extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare nome: string | null

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare senha: string

  @column()
  declare cpf: string

  @column()
  declare id_setor: string

  @column()
  declare id_tipo_usuario: string

  @belongsTo(() => Setor)
  declare setor: BelongsTo<typeof Setor>

  @belongsTo(() => TipoUsuario, {
    foreignKey: 'id_tipo_usuario',
  })
  declare tipoUsuario: BelongsTo<typeof TipoUsuario>

  static accessTokens = DbAccessTokensProvider.forModel(Usuario, {
    table: 'auth_access_tokens_usuarios',
  })
}
