const express = require('express');

const Router = express.Router();
const { readAll } = require('../controllers/ordersControllers');

Router.get('/', (req, res, next) => readAll(req, res, next));

module.exports = Router;
