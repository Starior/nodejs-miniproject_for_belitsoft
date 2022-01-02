const categoryModel = require('../models/category');

const find = (req, res) => {
  categoryModel
    .find()
    .then((categories) => {
      res.json(categories)
    })
    .catch((error) => {
      res.status(400).json({ error: error.message })
    })
}

const findOne = (req, res) => {
  const { id } = req.params;
  categoryModel
    .findById(id)
    .populate('categories')
    .then((category) => {
      if (category != null)
        res.status(200).json(category);
      else
        res.status(400).json("Post with this id does not exist");
    })
    .catch((error) => {
      res.status(400).json({ error: error.message })
    })
}

const create = (req, res) => {
  const post = new categoryModel(req.body)
  post
    .save()
    .then((category) => {
      res.json(category);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message })
    })
}

const update = (req, res) => {
  const { id } = req.params;
  categoryModel
    .updateOne({ _id: id }, req.body, function(err, result) {
      //mongoose.disconnect();
      if (err) return console.log(err);
      res.status(200).send(`Category with id ${id} was updated`);
    })
}

const remove = (req, res) => {
  const { id } = req.params;
  categoryModel
    .findByIdAndDelete(id, function(err, doc) {
      if (err) {
        return console.log(err);
      } else
        res.status(200).send(`Category with id ${id} was deleted`)
    });
}

module.exports = { find, findOne, create, update, remove }