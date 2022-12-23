const express = require('express');

const Router = express.Router();
const { getOrdersController } = require('../controllers/getOrders');

Router.get('/', (req, res) => getOrdersController(req, res));

module.exports = Router;
