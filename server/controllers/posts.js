const postModel = require('../models/post');

const find = (req, res) => {
  postModel
    .find()
    .populate('categories tags author')
    .then((posts) => {
      res.json(posts)
    })
    .catch((error) => {
      res.status(400).json({ error: error.message })
    })
}

const findOne = (req, res) => {
  const { id } = req.params;
  postModel
    .findById(id)
    .populate('categories')
    .then((post) => {
      if (post != null)
        res.status(200).json(post);
      else
        res.status(400).json("Post with this id does not exist");
    })
    .catch((error) => {
      res.status(400).json({ error: error.message })
    })
}

const create = (req, res) => {
  const post = new postModel(req.body)
  post
    .save()
    .then((post) => {
      res.json(post);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message })
    })
}

const update = (req, res) => {
  const { id } = req.params;
  postModel
    .updateOne({ _id: id }, req.body, function(err, result) {
      //mongoose.disconnect();
      if (err) return console.log(err);
      res.status(200).send(`Post with id ${id} was updated`);
    })
}

const remove = (req, res) => {
  const { id } = req.params;
  postModel
    .findByIdAndDelete(id, function(err, doc) {
      if (err) return console.log(err);
      else res.status(200).send(`Post with id ${id} was deleted`)
    });
}

module.exports = { find, findOne, create, update, remove }