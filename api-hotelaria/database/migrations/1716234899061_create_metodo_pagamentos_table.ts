import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'metodo_pagamentos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').notNullable().primary()
      table.string('nome').notNullable()
      table.string('descricao').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
