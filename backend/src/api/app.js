const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.send('API online');
});

app.use(routes);
app.use(errorHandler);

module.exports = app;