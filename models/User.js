const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

// const User = sequelizeConnection.define('user',{
User.init(
  {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [4,20]
    }
  }

  },
{
sequelize,
timestamps: false,
freezeTableName: true,
modelName:'users',
underscored: true
},
{
hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10)
        return newUserData
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10)
        return updatedUserData
      },
    },
  });
// User.beforeCreate(async user => {
//   const userData = user.dataValues;
//   user.password = await bcrypt.hash(user.password, 10);


// const newUser = {
//   username: 'Lam Nong',
//   password: '123456'
//   }

//   User.creat(newUser);


module.exports = User;