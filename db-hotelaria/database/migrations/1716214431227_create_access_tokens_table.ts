import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'auth_access_tokens_usuarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid('id')
        .notNullable()
        .primary()
        .defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)
      table
        .uuid('tokenable_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('usuarios')
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
