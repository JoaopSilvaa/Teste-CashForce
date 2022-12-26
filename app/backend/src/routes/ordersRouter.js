const express = require('express');

const Router = express.Router();
const { readAll, create, readById, update, remove } = require('../controllers/ordersControllers');

Router.get('/', (req, res, next) => readAll(req, res, next));
Router.get('/:id', (req, res, next) => readById(req, res, next));
Router.post('/', (req, res, next) => create(req, res, next));
Router.put('/:id', (req, res, next) => update(req, res, next));
Router.delete('/:id', (req, res, next) => remove(req, res, next));

module.exports = Router;
