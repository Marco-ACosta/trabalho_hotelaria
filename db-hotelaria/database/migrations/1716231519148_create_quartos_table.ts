import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'quartos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid('id')
        .notNullable()
        .primary()
        .defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)
      table.string('nome').notNullable().unique()
      table.string('descricao').notNullable()
      table.integer('qtd_banheiros').notNullable()
      table.integer('numero').notNullable()
      table.integer('andar').notNullable()
      table.float('valor_diaria').notNullable()
      table.boolean('tem_sacada').notNullable()
      table.boolean('tem_ar_condicionado').notNullable()
      table.boolean('pode_animais').notNullable()
      table.boolean('disponivel').notNullable()
      table.uuid('id_predio').notNullable().unsigned().references('id').inTable('predios')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
