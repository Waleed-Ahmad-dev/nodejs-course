const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_course', 'root', 'Waleed#2009', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
