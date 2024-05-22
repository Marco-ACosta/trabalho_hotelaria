import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'predios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').notNullable().primary()
      table.string('nome').notNullable().unique()
      table.string('descricao').notNullable()
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
