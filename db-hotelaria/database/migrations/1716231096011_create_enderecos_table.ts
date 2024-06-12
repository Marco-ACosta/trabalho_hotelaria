import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'enderecos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid('id')
        .notNullable()
        .primary()
        .defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)
      table.string('numero').notNullable()
      table.string('rua').notNullable()
      table.string('complemento').notNullable()
      table.string('cep').notNullable()
      table.string('bairro').notNullable()
      table.string('cidade').notNullable()
      table.string('estado').notNullable()
      table.string('pais').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
