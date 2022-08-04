const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const Comment = sequelize.define('comments', {
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
  },
  created_at: {
    type: Sequelize.DATE,
    allowNull: false,
  },
},
{
  sequelize: sequelize,
  timestamps: true,
  freezeTableName: true,
  modelName: 'comments',
  underscored: true
});

module.exports = Comment;