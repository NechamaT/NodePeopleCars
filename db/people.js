const knex = require("knex")({
  client: "mssql",
  connection: {
    server: "localhost",
    user: "db_user",
    password: "foobar",
    database: "people-cars-node",
    options: {
      port: 1433,
      instanceName: "SQLEXPRESS",
    },
  },
});

const addPerson = async (person) => {
  await knex("people").insert(person);
};

const getAll = async () => {
  return await knex
    .from("people")
    .leftJoin("cars", "people.id", "car.personId")
    .select("people.*")
    .count({ carCount: "cars.personId" })
    .groupby("people.id", "people.firstName", "people.lastName", "people.age");
};

const getPersonById = async (id) => {
  return await knex("people").where("id", id).select("*").first();
};

module.exports = {
  addPerson,
  getAll,
  getPersonById
};
