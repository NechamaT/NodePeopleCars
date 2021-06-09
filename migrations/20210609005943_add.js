
exports.up = function(knex) {
    return knex.schema.createTable("cars", (table) => {
        table.increments("id").primary();
        table.string("make");
        table.string("model");
        table.integer("year");
        table.integer("personId").references('id').inTable('people');
      });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cars');
};
