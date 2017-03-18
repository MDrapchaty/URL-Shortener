const Sequelize = require('sequelize');

require('dotenv').config(); // require dotenv for environmental variables


// Connect to a db

const sequelize = new Sequelize(
  'apiCRUD',
  'root',
  'root', {
    host: 'localhost',    // Set the host.
    dialect: 'mysql',    // Set the dialect.
    port: 3306,    // Set the port.
    // Set the max and min connections and maximum idle time.
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },

    logging: false,
  });

// Defining a model
const url = sequelize.define('urls', {
  Url: {
    type: Sequelize.STRING,
  },
  shortUrl: {
    type: Sequelize.STRING,
  },
});

// sequelize.authenticate();
sequelize.sync();
exports.sequelize = sequelize;
exports.url = url;
