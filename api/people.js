const router = require("express").Router();
const peopleDb = require("../db/people");

router.post("/add", async (req, res) => {
  const { person } = req.body;
  await peopleDb.addPerson(person);
  res.json({ status: "ok" });
});

router.get("/", async (req, res) => {
  const people = await peopleDb.getAll();
  res.json(people);
});

module.exports = router;
