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

const addCar = async (car) => {
  await knex("cars").insert(car);
};

const deleteCar = async (id) => {
  await knex("cars").where("personId", id);
};

const getAll = async (id) => {
  return await knex.from("cars").select("*").where("personId", id);
};

module.exports = {
  addCar,
  deleteCar,
  getAll,
};
