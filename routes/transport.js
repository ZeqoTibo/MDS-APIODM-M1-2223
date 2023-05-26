const express = require( 'express');
const router = express.Router();

// Require controller modules.
const transportControllers = require('../controllers/transportController')

router.get('/', transportControllers.index);

router.post('/', transportControllers.insert);

router.get('/:id', transportControllers.getById);

router.put('/:id', transportControllers.update);

router.delete('/:id', transportControllers.delete);

module.exports = router;
