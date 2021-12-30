const mongodb = require('mongodb')
  // const url = 'mongodb://Starion:12345qwert@cluster0-shard-00-00.pxpmi.mongodb.net:27017,cluster0-shard-00-01.pxpmi.mongodb.net:27017,cluster0-shard-00-02.pxpmi.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-eofmjt-shard-0&authSource=admin&retryWrites=true&w=majority';
const url = 'mongodb+srv://Starion:12345qwert@cluster0.pxpmi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const client = new mongodb.MongoClient(url);
let database;

const connect = (callback) => {
  client
    .connect()
    .then((client) => {
      database = client.db()
        // console.log(database)
      callback();
    })
    .catch((error) => {
      callback(error)
    })
}

const disconnect = (callback) => {
  client.close().then(() => {
    callback()
  })
}

const getDb = () => database

exports.connect = connect
exports.disconnect = disconnect
exports.getDb = getDb