const express = require( 'express');
const router = express.Router();

// Require controller modules.
const starshipsControllers = require('../controllers/starshipsController')

router.get('/', starshipsControllers.index);

router.post('/', starshipsControllers.insert);

router.get('/:id', starshipsControllers.getById);

router.put('/:id', starshipsControllers.update);

router.delete('/:id', starshipsControllers.delete);

module.exports = router;
