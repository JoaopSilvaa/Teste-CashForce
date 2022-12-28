require('dotenv').config();

const environment = process.env.NODE_ENV;

const suffix = {
  development: '-dev',
};

const options = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || '3306',
  database: 
    `${process.env.DB_NAME || 'teste-cashforce'}${suffix[environment]}`,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '123456',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
};

module.exports = {
  development: {
    ...options,
  },
};