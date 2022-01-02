const authorModel = require('../models/author');

const find = (req, res) => {
  authorModel
    .find()
    .then((authors) => {
      res.json(authors)
    })
    .catch((error) => {
      res.status(400).json({ error: error.message })
    })
}

const findOne = (req, res) => {
  const { id } = req.params;
  authorModel
    .findById(id)
    .then((author) => {
      if (author != null)
        res.status(200).json(author);
      else
        res.status(400).json("Author with this id does not exist");
    })
    .catch((error) => {
      res.status(400).json({ error: error.message })
    })
}

const create = (req, res) => {
  const author = new authorModel(req.body)
  author
    .save()
    .then((author) => {
      res.json(author);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message })
    })
}

const update = (req, res) => {
  const { id } = req.params;
  authorModel
    .updateOne({ _id: id }, req.body, function(err, result) {
      //mongoose.disconnect();
      if (err) return console.log(err);
      res.status(200).send(`Post with id ${id} was updated`);
    })
}

const remove = (req, res) => {
  const { id } = req.params;
  authorModel
    .findByIdAndDelete(id, function(err, doc) {
      if (err) {
        return console.log(err);
      } else
        res.status(200).send(`Author with id ${id} was deleted`)
        // console.log(`Post with id ${id} was deleted`, doc);
    });
}

module.exports = { find, findOne, create, update, remove }