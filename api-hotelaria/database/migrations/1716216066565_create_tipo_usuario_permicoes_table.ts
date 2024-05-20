import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tipo_usuario_permicoes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').notNullable().primary()
      table
        .uuid('permicao_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('permicoes')
        .onDelete('CASCADE')
      table
        .uuid('tipo_usuario_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('tipo_usuarios')
        .onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
