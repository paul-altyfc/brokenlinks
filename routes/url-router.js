const urlRouter = require('express').Router();
const { sendURL } = require('../controllers/url-controller.js');

// urlRouter.get('/', function(req, res) {
//   res.send('Hello from url router');
// });

urlRouter.route('/:url').get(sendURL);

module.exports = urlRouter;
