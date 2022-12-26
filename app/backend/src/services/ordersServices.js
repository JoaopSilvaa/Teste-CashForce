const { Order, Buyer, Provider } = require('../database/models');

const readAllOrders = async () => {
    const orders = await Order.findAll({
        include: [
            { model: Buyer, as: 'buyer', attributes: { exclude: 'createdAt, updateAt' } },
            { model: Provider, as: 'provider', attributes: { exclude: 'createdAt, updateAt' } },
        ],
    });
    
    if (!orders) {
        return {
            error: {
                code: 'notFound',
                message: 'Orders not Found',
            },
        };
    }
    return orders;
};

const readOrderById = async (id) => {
    const [order] = await Order.findAll({
        where: { id },
        include: [
            { model: Buyer, as: 'buyer', attributes: { exclude: 'createdAt, updateAt' } },
            { model: Provider, as: 'provider', attributes: { exclude: 'createdAt, updateAt' } },
        ],
    });
    
    if (!order) {
        return {
            error: {
                code: 'notFound',
                message: 'Order not Found',
            },
        };
    }
    return order;
};

const verifyAlreadyExist = async (orderNfId) => {
    const orderInDB = await Order.findAll({
        where: { orderNfId },
    });

    if (orderInDB.length !== 0) {
        return {
            error: {
                code: 'conflict',
                message: 'Order already registered',
            },
        };
    }
};

const validyOrders = (orderStatusBuyer, orderStatusProvider) => {
    if (Number(orderStatusBuyer) > 8 || Number(orderStatusBuyer) < 1
        || Number(orderStatusProvider) > 8 || Number(orderStatusProvider) < 1) {
        return {
            error: {
                code: 'badRequest',
                message: 'Invalid orders status',
            },
        };
    }
};

const createOrder = async (order) => {   
    const params = ['orderNfId', 'orderNumber', 'emissionDate', 'emitedTo', 'nNf',
        'value', 'cnpjId', 'userId', 'buyerId', 'providerId', 'orderStatusBuyer',
        'orderStatusProvider'];
    const paramsOrder = Object.keys(order); 
    
    const { orderStatusBuyer, orderStatusProvider } = order;

    const invalidOrders = validyOrders(orderStatusBuyer, orderStatusProvider);
    if (invalidOrders) return invalidOrders;

    const verifyParams = params.every((element) => paramsOrder.includes(element));
    if (!verifyParams) {
        return {
            error: { code: 'badRequest', message: 'Parameters are missing' },
        };
    }

    const { orderNfId } = order;

    const orderExist = await verifyAlreadyExist(orderNfId);
    if (orderExist) return orderExist;

    return Order.create(order);
};

const updateOrder = async (order, id) => {
    const orderExist = await Order.findByPk(id);
    
    if (!orderExist) {
        return {
            error: {
                code: 'notFound',
                message: 'Order not Found',
            },
        };
    }

    const { orderStatusBuyer, orderStatusProvider } = order;
    
    const invalidOrders = validyOrders(orderStatusBuyer, orderStatusProvider);
    if (invalidOrders) return invalidOrders;

    await Order.update({
            orderStatusBuyer,
            orderStatusProvider,
        },
        { where: { id } });

    return Order.findByPk(id);
};

const deleteOrder = async (id) => {
    const orderExist = await Order.findByPk(id);
    
    if (!orderExist) {
        return {
            error: {
                code: 'notFound',
                message: 'Order not Found',
            },
        };
    }

    return Order.destroy({ where: { id } });
};

module.exports = {
    readAllOrders,
    readOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
};