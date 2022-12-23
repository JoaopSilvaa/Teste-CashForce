const Cnpj = (sequelize, DataTypes) => {
    const Cnpj = sequelize.define('Cnpj', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cnpj: DataTypes.STRING,
        companyType: DataTypes.STRING,
    });
  
    return Cnpj;
  };
  
module.exports = Cnpj;
