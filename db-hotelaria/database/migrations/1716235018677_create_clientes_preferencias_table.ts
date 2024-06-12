import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clientes_preferencias'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid('id')
        .notNullable()
        .primary()
        .defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)
      table
        .uuid('id_preferencia')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('preferencias')
        .onDelete('CASCADE')
      table
        .uuid('id_cliente')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('clientes')
        .onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
