
const Sequelize = require('sequelize');

require('dotenv').config();


let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize('tech_blog_db', 'root', '12345678', {
    host: 'localhost',
    dialect: 'mysql',
    // password: '12345678',
    port: 3306
  });
}

module.exports = sequelize;