const User = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phoneNumber: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        mobile: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        departament: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        verificationCode: {
            defaultValue: null,
            type: DataTypes.STRING,
        },
        emailChecked: {
            defaultValue: 0,
            type: DataTypes.TINYINT,
        },
        cashforceAdm: {
            defaultValue: 0,
            type: DataTypes.TINYINT,
        }
    },
    {
        timestamps: true,
    });
  
    return User;
  };
  
module.exports = User;
