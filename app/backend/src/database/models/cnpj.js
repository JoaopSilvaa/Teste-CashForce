const Cnpj = (sequelize, DataTypes) => {
    const Cnpj = sequelize.define('Cnpj', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cnpj: DataTypes.STRING,
        companyType: DataTypes.STRING,
    },
    {
        timestamps: true,
    });
  
    return Cnpj;
  };
  
module.exports = Cnpj;
