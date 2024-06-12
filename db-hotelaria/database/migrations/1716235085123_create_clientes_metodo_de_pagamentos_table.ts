import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clientes_metodo_de_pagamentos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid('id')
        .notNullable()
        .primary()
        .defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)
      table
        .uuid('cliente_id')
        .unsigned()
        .references('id')
        .inTable('clientes')
        .onDelete('CASCADE')
        .notNullable()
      table
        .uuid('metodo_de_pagamento_id')
        .unsigned()
        .references('id')
        .inTable('metodo_pagamentos')
        .onDelete('CASCADE')
        .notNullable()
      table.string('nome_do_cartao')
      table.string('numero_do_cartao')
      table.string('validade')
      table.string('cvv')
      table.string('bandeira')
      table.boolean('padrao')
      table.boolean('ativo')
      table.string('nome')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
