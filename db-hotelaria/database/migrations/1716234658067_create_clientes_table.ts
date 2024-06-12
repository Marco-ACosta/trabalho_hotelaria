import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clientes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid('id')
        .notNullable()
        .primary()
        .defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)
      table.string('nome').notNullable()
      table.string('cpf', 11).notNullable().unique()
      table.string('email').notNullable().unique()
      table.string('senha').notNullable()
      table.dateTime('data_nascimento').notNullable()
      table
        .uuid('id_endereco')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('enderecos')
        .onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
