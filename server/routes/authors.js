const express = require('express')

const authorsController = require('../controllers/authors');
const router = express.Router()

// get all authors
router.get('/authors', authorsController.find);

// get single author by id
router.get('/authors/:id', authorsController.findOne);

// create a new author
router.post('/authors', authorsController.create);

// update author by id
router.patch('/authors/:id', authorsController.update);

// delete author by id 
router.delete('/authors/:id', authorsController.remove);

module.exports = router