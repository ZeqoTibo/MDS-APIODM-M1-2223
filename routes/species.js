const express = require( 'express');
const router = express.Router();

// Require controller modules.
const speciesControllers = require('../controllers/speciesController')

router.get('/', speciesControllers.index);

router.post('/', speciesControllers.insert);

router.get('/:id', speciesControllers.getById);

router.put('/:id', speciesControllers.update);

router.delete('/:id', speciesControllers.delete);

module.exports = router;
