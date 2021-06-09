const router = require('express').Router();
const cars = require('./cars');
const people = require('./people');

router.use('/cars', cars);
router.use('/people', people);

module.exports = router;