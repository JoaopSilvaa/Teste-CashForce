const { getOrders } = require('../services/getOrders');

const getOrdersController = async (_req, res, next) => {
    const orders = await getOrders();

    if (orders.error) return next(orders.error);

    return res.status(200).json(orders);
};

module.exports = { getOrdersController };
