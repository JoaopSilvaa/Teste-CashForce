const Offer = (sequelize, DataTypes) => {
    const Offer = sequelize.define('Offer', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        tax: DataTypes.STRING,
        tariff: DataTypes.STRING,
        adValorem: DataTypes.STRING,
        float: DataTypes.STRING,
        iof: DataTypes.STRING,
        expiresIn: DataTypes.DATETIME,
        paymentStatusSponsor: {
            defaultValue: 0,
            type: DataTypes.TINYINT,
        },
        paymentStatusProvider: {
            defaultValue: 0,
            type: DataTypes.TINYINT,
        },
        orderId: {
            defaultValue: null,
            type: DataTypes.INTEGER,
        },
        sponsorId: {
            defaultValue: null,
            type: DataTypes.INTEGER,
        },
    });
    
    Offer.associate = (models) => {
        Offer.belognsTo(models.Cnpj,
            { foreignKey: 'orderId', as: 'order' }),
        Offer.belognsTo(models.User,
            { foreignKey: 'sponsorId', as: 'sponsor' })
    };

    return Offer;
  };
  
module.exports = Offer;
