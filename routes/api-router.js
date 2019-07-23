const apiRouter = require('express').Router();
const urlRouter = require('./url-router.js');

// apiRouter.get('/', (req, res) => res.send('Hello from API Router'));
apiRouter.use('/url', urlRouter);

module.exports = apiRouter;
