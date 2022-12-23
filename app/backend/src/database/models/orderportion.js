const OrderPortion = (sequelize, DataTypes) => {
    const OrderPortion = sequelize.define('OrderPortion', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nDup: DataTypes.STRING,
        dVenc: DataTypes.STRING,
        vDup: DataTypes.STRING,
        availableToMarket: {
            defaultValue: 1,
            type: DataTypes.TINYINT,
        },
        orderId: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
    });
    
    OrderPortion.associate = (models) => {
        OrderPortion.belognsTo(models.Cnpj,
            { foreignKey: 'orderId', as: 'order' })
    };

    return OrderPortion;
  };
  
module.exports = OrderPortion;
