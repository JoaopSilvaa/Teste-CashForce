const { readAllOrders } = require('../services/ordersServices');

const readAll = async (_req, res, next) => {
    const orders = await readAllOrders();

    if (orders.error) return next(orders.error);

    return res.status(200).json(orders);
};

module.exports = { 
    readAll,
};
