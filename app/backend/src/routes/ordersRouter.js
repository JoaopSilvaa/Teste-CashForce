const express = require('express');

const Router = express.Router();
const { getOrdersController } = require('../controllers/getOrders');

Router.get('/', (req, res, next) => getOrdersController(req, res, next));

module.exports = Router;
