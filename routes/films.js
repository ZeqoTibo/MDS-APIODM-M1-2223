const express = require( 'express');
const router = express.Router();

// Require controller modules.
const filmsControllers = require('../controllers/filmsController')

router.get('/', filmsControllers.index);

router.post('/', filmsControllers.insert);

router.get('/:id', filmsControllers.getById);

router.put('/:id', filmsControllers.update);

router.delete('/:id', filmsControllers.delete);

module.exports = router;
