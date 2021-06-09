const router = require("express").Router();
const carsDb = require("../db/cars");

router.get("/getforperson", async (req, res) => {
  const cars = await carsDb.getAll(req.query.id);
  res.json(cars);
});

router.post("/addcar", async (req, res) => {
  await carsDb.addCar(req.body);
  res.json({ status: "ok" });
});

router.post("/delete", async (req, res) => {
  await carsDb.deleteCar(req.body.id);
  res.json({ status: "ok" });
});

module.exports = router;
