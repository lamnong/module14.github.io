const Sequelize = require('sequelize');
const sequelizeConnection = require('../config/connection');

const Comment = sequelizeConnection.define('comment', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  post_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    reference: {
      model: 'Post',
      key: 'id'
    }
  },

  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    reference: {
      model: 'User',
      key: 'id'
    }
  }
},
{
  sequelize: sequelizeConnection,
  timestamps: true,
  freezeTableName: true,
  modelName: 'comments',
  underscored: true
});

module.exports = Comment;