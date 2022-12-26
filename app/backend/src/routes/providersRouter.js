const express = require('express');

const Router = express.Router();
const { readById } = require('../controllers/providersControllers');

Router.get('/:id', (req, res, next) => readById(req, res, next));

module.exports = Router;
