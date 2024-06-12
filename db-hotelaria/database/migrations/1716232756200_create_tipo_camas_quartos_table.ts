import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tipo_camas_quartos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid('id')
        .notNullable()
        .primary()
        .defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)
      table.integer('quantidade').notNullable()
      table
        .uuid('id_quarto')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('quartos')
        .onDelete('CASCADE')

      table
        .uuid('id_tipo_cama')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('tipo_camas')
        .onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
