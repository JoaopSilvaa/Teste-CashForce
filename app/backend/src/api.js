const express = require('express');
const cors = require('cors');
const rescue = require('express-rescue');
const ordersRouter = require('./routes/ordersRouter');
const providerRouter = require('./routes/providersRouter');
const errors = require('./middlewares/errors');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/orders', rescue(ordersRouter));
app.use('/providers', rescue(providerRouter));

app.use(errors);

module.exports = app;
