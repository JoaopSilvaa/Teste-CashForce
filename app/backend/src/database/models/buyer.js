const Buyer = (sequelize, DataTypes) => {
    const Buyer = sequelize.define('Buyer', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        tradingName: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        cashforceTax: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        responsibleName: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        responsibleEmail: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        responsiblePosition: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        responsiblePhone: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        responsibleMobile: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        website: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        postalCode: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        address: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        number: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        complement: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        neighborhood: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        city: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        state: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        phoneNumber: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        situation: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        situationDate: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        cnpjId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        confirm: {
            defaultValue: 1,
            type: DataTypes.TINYINT,
        },
        email: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
    });
    
    Buyer.associate = (models) => {
        Buyer.belognsTo(models.Cnpj,
            { foreignKey: 'cnpjId', as: 'cpnj' })
    };

    return Buyer;
  };
  
module.exports = Buyer;
