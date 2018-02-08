'use strict';

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema
    .createTableIfNotExists('loginInfo', function(table) {
      table.increments('id');
      table.string('userName');
      table.string('password');
      table.string('email');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    }), 

    knex.schema
    .createTableIfNotExists('profileInfo', function(table) {
      table.increments('id');
      table.integer('userName_id').unsigned();
      table.foreign('userName_id').references('loginInfo.id');
      table.string('firstName');
      table.string('lastName');
      table.string('phoneNumber');
      table.string('streetAddress');
      table.string('city');
      table.string('state')
      table.integer('zipCode');
    }),  
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('loginInfo'), 
    knex.schema.dropTable('profileInfo')
    ]);
};