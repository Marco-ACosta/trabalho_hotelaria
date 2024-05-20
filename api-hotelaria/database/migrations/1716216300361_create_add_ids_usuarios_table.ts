import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'usuarios'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .uuid('id_tipo_usuario')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tipo_usuarios')
        .onDelete('CASCADE')

      table
        .uuid('id_setor')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('setores')
        .onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumns('id_setor', 'id_tipo_usuario')
    })
  }
}
