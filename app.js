const ENV = process.env.NODE_ENV || 'development';

const cors = require('cors');

const express = require('express');
const app = express();
const apiRouter = require('./routes/api-router.js');
const { routeNotFound } = require('./index.js');

app.use(cors());
app.use('/api', apiRouter);
//app.get('/', (req, res) => res.send('Hello World'));
app.use('/*', routeNotFound);

module.exports = app;
