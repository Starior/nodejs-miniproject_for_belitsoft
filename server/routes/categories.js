const express = require('express')
const CategoryModel = require('../models/category');

const router = express.Router()

// get all 
router.get('/categories', (req, res) => {
  CategoryModel.find((error, posts) => {
    if (error) {
      return res.status(400).json({ error: error.message })
    }

    res.json(posts)
  })
})

// create a new
router.post('/categories', (req, res) => {
  const post = new CategoryModel(req.body)
  post
    .save()
    .then((post) => {
      res.json(post);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message })
    })
})

// todo: CRUD

module.exports = router