const tagModel = require('../models/tag');

const find = (req, res) => {
  tagModel
    .find()
    .then((tag) => {
      res.json(tag)
    })
    .catch((error) => {
      res.status(400).json({ error: error.message })
    })
}

const findOne = (req, res) => {
  const { id } = req.params;
  tagModel
    .findById(id)
    .then((tag) => {
      if (tag != null)
        res.status(200).json(tag);
      else
        res.status(400).json("Tag with this id does not exist");
    })
    .catch((error) => {
      res.status(400).json({ error: error.message })
    })
}

const create = (req, res) => {
  const tag = new tagModel(req.body)
  tag
    .save()
    .then((tag) => {
      res.json(tag);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message })
    })
}

const update = (req, res) => {
  const { id } = req.params;
  tagModel
    .updateOne({ _id: id }, req.body, function(err, result) {
      //mongoose.disconnect();
      if (err) return console.log(err);
      res.status(200).send(`Post with id ${id} was updated`);
    })
}

const remove = (req, res) => {
  const { id } = req.params;
  tagModel
    .findByIdAndDelete(id, function(err, doc) {
      if (err) {
        return console.log(err);
      } else
        res.status(200).send(`Tag with id ${id} was deleted`)
    });
}

module.exports = { find, findOne, create, update, remove }