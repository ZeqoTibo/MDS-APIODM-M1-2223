const express = require( 'express');
const router = express.Router();

// Require controller modules.
const planetsControllers = require('../controllers/planetsController')

router.get('/', planetsControllers.index);

router.post('/', planetsControllers.insert);

router.get('/:id', planetsControllers.getById);

router.put('/:id', planetsControllers.update);

router.delete('/:id', planetsControllers.delete);

module.exports = router;
