const express = require( 'express');
const router = express.Router();

// Require controller modules.
const vehiclesControllers = require('../controllers/vehiclesController')

router.get('/', vehiclesControllers.index);

router.post('/', vehiclesControllers.insert);

router.get('/:id', vehiclesControllers.getById);

router.put('/:id', vehiclesControllers.update);

router.delete('/:id', vehiclesControllers.delete);

module.exports = router;
