import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'reservas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid('id')
        .notNullable()
        .primary()
        .defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)
      table
        .uuid('clientes')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('clientes')
        .onDelete('CASCADE')
      table
        .uuid('id_quarto')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('quartos')
        .onDelete('CASCADE')
      table
        .uuid('id_clientes_metodo_de_pagamentos')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('clientes_metodo_de_pagamentos')
        .onDelete('CASCADE')

      table.date('data_checkin').notNullable()
      table.date('data_checkout').notNullable()
      table.integer('total').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
