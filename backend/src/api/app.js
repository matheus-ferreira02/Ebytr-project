const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
  return res.send('API online');
});

app.use(errorHandler);

module.exports = app;