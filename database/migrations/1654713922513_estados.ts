import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'estados'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_estado')
      table.string('nom_estado')

    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
