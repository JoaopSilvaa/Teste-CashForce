const {
    readAllOrders,
    createOrder,
    updateOrder,
    readOrderById,
    deleteOrder,
} = require('../services/ordersServices');

const readAll = async (_req, res, next) => {
    const orders = await readAllOrders();

    if (orders.error) return next(orders.error);

    return res.status(200).json(orders);
};

const readById = async (req, res, next) => {
    const { id } = req.params;

    const order = await readOrderById(id);

    if (order.error) return next(order.error);

    return res.status(200).json(order);
};

const create = async (req, res, next) => {
    const order = await createOrder(req.body);

    if (order.error) return next(order.error);

    return res.status(201).json(order);
};

const update = async (req, res, next) => {
    const { id } = req.params;
    const order = await updateOrder(req.body, id);

    if (order.error) return next(order.error);

    return res.status(200).json(order);
};

const remove = async (req, res, next) => {
    const { id } = req.params;
    const order = await deleteOrder(id);

    if (order.error) return next(order.error);

    return res.status(204).send();
};

module.exports = { 
    readAll,
    readById,
    create,
    update,
    remove,
};
