import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Employees extends BaseSchema {
  protected tableName = 'employees'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('employeeID').primary()
      table.string('username',255).notNullable().unique()
      table.string('password',100).notNullable()
      table.string('firstName',255).notNullable()
      table.string('lastName',255).notNullable()
      table.string('telNo')
      table.string('email')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
