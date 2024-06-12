import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'modulos_permicoes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid('id')
        .notNullable()
        .primary()
        .defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)
      table
        .uuid('modulo_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('modulos')
        .onDelete('CASCADE')
      table
        .uuid('permicao_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('permicoes')
        .onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
