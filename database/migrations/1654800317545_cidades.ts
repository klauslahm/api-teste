import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'cidades'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_cidade')
      table.string('nom_cidade')
      table.integer('id_ibge')
      table.integer('id_estado').unsigned().references('estados.id_estado')
      table.integer('id_pais').unsigned().references('pais.id_pais')      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
