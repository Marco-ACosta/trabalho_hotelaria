import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tipo_usuarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').notNullable().primary()
      table.string('nome').notNullable().unique()
      table.string('descricao').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
