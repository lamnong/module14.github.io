const Sequelize = require('sequelize');
const sequelizeConnection = require('../config/connection');
const bcrypt = require('bcrypt');

const User = sequelizeConnection.define('user',{
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
    validate: {
      len: [4,20]
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [4,20]
    }
  }

  },
{
  sequelize: sequelizeConnection,
  timestamps: false,
  freezeTableName: true,
  modelName:'users',
  underscored: true
});
 
User.beforeCreate(async user => {
  const userData = user.dataValues;
  user.password = await bcrypt.hash(user.password, 10);
})

// const newUser = {
//   username: 'Lam Nong',
//   password: '123456'
//   }

//   User.creat(newUser);


module.exports = User;