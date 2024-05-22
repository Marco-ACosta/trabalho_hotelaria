import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'auth_access_tokens_clientes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').notNullable().primary()
      table
        .uuid('tokenable_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('clientes')
        .onDelete('CASCADE')

      table.string('type').notNullable()
      table.string('name').nullable()
      table.string('hash').notNullable()
      table.text('abilities').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.timestamp('last_used_at').nullable()
      table.timestamp('expires_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}