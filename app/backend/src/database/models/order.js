const Order = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        orderNfId: DataTypes.STRING,
        orderNumber: DataTypes.STRING,
        orderPath: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        orderFileName: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        orderOriginalName: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        emissionDate: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        pdfFile: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        emitedTo: DataTypes.STRING,
        nNf: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        CTE: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        value: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        cnpjId: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        userId: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        buyerId: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        providerId: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        orderStatusBuyer: {
            defaultValue: '0',
            type: DataTypes.STRING,
        },
        orderStatusProvider: {
            defaultValue: '0',
            type: DataTypes.STRING,
        },
        deliveryReceipt: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        cargoPackingList: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        deliveryCtrc: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
    });
    
    Order.associate = (models) => {
        Order.belongsTo(models.Cnpj,
            { foreignKey: 'cnpjId', as: 'cpnj' }),
        Order.belongsTo(models.User,
            { foreignKey: 'userId', as: 'user' }),
        Order.belongsTo(models.Buyer,
            { foreignKey: 'buyerId', as: 'buyer' }),
        Order.belongsTo(models.Provider,
            { foreignKey: 'providerId', as: 'provider' })
    };

    return Order;
  };
  
module.exports = Order;
