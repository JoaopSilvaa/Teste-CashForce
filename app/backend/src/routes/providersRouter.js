const express = require('express');

const Router = express.Router();
const { getProviderByIdController } = require('../controllers/getProviderById');

Router.get('/:id', (req, res, next) => getProviderByIdController(req, res, next));

module.exports = Router;
