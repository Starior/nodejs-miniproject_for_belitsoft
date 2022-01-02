const express = require('express')

const categoryController = require('../controllers/categories');
const router = express.Router()

// get all posts
router.get('/categories', categoryController.find);

// get single post by id
router.get('/categories/:id', categoryController.findOne);

// create a new post
router.post('/categories', categoryController.create);

// update post by id
router.patch('/categories/:id', categoryController.update);

// delete post by id 
router.delete('/categories/:id', categoryController.remove);

module.exports = router