'use strict';
var express = require('express');
var router = express.Router();
var ctrlItems = require('../controllers/todoItems');

/* GET users listing. */
router.get('/', ctrlItems.getAll);

router.get('/:id', ctrlItems.getOne);

router.post('/', ctrlItems.addOne);

router.put('/:id', ctrlItems.updateOne);

router.delete('/:id', ctrlItems.deleteOne);

module.exports = router;
