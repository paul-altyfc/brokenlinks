const ENV = process.env.NODE_ENV || 'development';

const fs = require('fs');

exports.routeNotFound = (req, res) => {
  res.status(404).send({ msg: 'Not Found' });
};

// exports.writefile = (url, deadlist) => {

// };
