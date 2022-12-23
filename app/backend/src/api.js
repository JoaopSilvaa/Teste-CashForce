const express = require('express');
const ordersRouter = require('./routes/ordersRouter');
const errors = require('./middlewares/errors');

const app = express();

app.use(express.json());
app.use('/orders', ordersRouter);

app.use(errors);

module.exports = app;
