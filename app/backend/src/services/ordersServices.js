const { Order, Buyer, Provider } = require('../database/models');

const readAllOrders = async () => {
    const orders = await Order.findAll({
        include: [
            { model: Buyer, as: 'buyer', attributes: { exclude: 'createdAt, updateAt' } },
            { model: Provider, as: 'provider', attributes: { exclude: 'createdAt, updateAt' } },
        ] });
    
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

module.exports = {
    readAllOrders,
};