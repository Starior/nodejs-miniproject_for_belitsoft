const fs = require('fs');

const writeLog = (req, res, next) => {
  const obj = {
    route: req.url,
    method: req.method,
    params: req.params,
    body: req.body,
    time: Date.now()
  };
  var json = JSON.stringify(obj);
  fs.appendFile('./logs.json', json + ",\n", () => {
    console.log('logs.json was updated');
  })
  next();
}

module.exports = { writeLog }