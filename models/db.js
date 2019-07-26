const Sequelize = require('sequelize');
const mysql2 =  require('mysql2'); // Needed to fix sequelize issues with WebPack

require('dotenv').config(); // require dotenv for environmental variables



// Connect to a db (using environmental variables for privacy)


const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS, {
    host: process.env.DB_HOST,    // Set the host.
    dialect: 'mysql',  //process.env.DB_SCHEMA,    // Set the dialect.
    dialectModule: mysql2,       // Needed to fix sequelize issues with WebPack
    port: process.env.DB_PORT,    // Set the port.
    // Set the max and min connections and maximum idle time.
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    logging: false,
    dialectOptions: {
    ssl: true,
    },
  });

// sequelize.authenticate();

// Defining a model
const url = sequelize.define('urls', {
  Url: {
    type: Sequelize.STRING,
  },
  shortUrl: {
    type: Sequelize.STRING,
  },
});


sequelize.sync();
exports.sequelize = sequelize;
exports.url = url;
