const cors = require('cors');

const express = require('express');
const app = express();
const port = process.env.PORT || 9090;
const apiRouter = require('./routes/api-router.js');
const { routeNotFound } = require('./index.js');

app.use(cors());
app.use('/api', apiRouter);
//app.get('/', (req, res) => res.send('Hello World'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use('/*', routeNotFound);

module.exports = app;
