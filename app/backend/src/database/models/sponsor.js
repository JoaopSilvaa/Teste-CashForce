const Sponsor = (sequelize, DataTypes) => {
    const Sponsor = sequelize.define('Sponsor', {
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
        bank: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        bankAgency: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        account: {
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
        email: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: true,
    });
    
    Sponsor.associate = (models) => {
        Sponsor.belognsTo(models.Cnpj,
            { foreignKey: 'cnpjId', as: 'cpnj' })
    };

    return Sponsor;
  };
  
module.exports = Sponsor;
