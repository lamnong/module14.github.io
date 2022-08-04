const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Sequelize.Model {}

// const Post = sequelize.define('Post', {
Post.init({
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  title: {
    type: Sequelize.STRING,
    allowNull: false
  },

  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  created_at: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    reference: {
        model: 'User',
        key: 'id'
    }
  }},
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: 'posts',
    underscored: true
  }
);

// Post.sync({force:true});

module.exports = Post;