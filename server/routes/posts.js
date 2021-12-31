const express = require('express')

const PostModel = require('../models/post');
const postsController = require('../controllers/posts');
const router = express.Router()

// // get all posts
router.get('/posts', postsController.find);

// get single post by id
router.get('/posts/:id', postsController.findOne);

// create a new post
router.post('/posts', (req, res) => {
  const post = new PostModel(req.body)
  post
    .save()
    .then((post) => {
      res.json(post);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message })
    })
})

// delete post by id
router.delete('/posts/:id', (req, res) => {
    const { id } = req.params;
    PostModel
      .findByIdAndDelete(id, function(err, doc) {
        res.status(200).send(`Post with id ${id} was deleted`)

        if (err) return console.log(err);

        console.log("Удален пользователь ", doc);
      });
  })
  // todo: update and remove

module.exports = router