const express = require( 'express');
const router = express.Router();

// Require controller modules.
const peopleControllers = require('../controllers/peopleController')

router.get('/', peopleControllers.index);

router.post('/', peopleControllers.insert);

router.get('/:id', peopleControllers.getById);

router.put('/:id', peopleControllers.update);

router.delete('/:id', peopleControllers.delete);

module.exports = router;
