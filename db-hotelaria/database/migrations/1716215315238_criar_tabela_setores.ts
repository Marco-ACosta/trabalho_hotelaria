import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'setores'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid('id')
        .notNullable()
        .primary()
        .defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)
      table.string('nome').notNullable().unique()
      table.string('descricao').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
