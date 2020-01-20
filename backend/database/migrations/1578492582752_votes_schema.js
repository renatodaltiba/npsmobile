'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VotesSchema extends Schema {
  up () {
    this.create('votes', (table) => {
      table.increments()
      table
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.string('content', 2).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('votes')
  }
}

module.exports = VotesSchema
