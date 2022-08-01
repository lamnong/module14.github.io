// const seedPosts = require('./post-seeds');
// const seedUsers = require('./user-seeds');
// const seedComments = require('./comment-seeds');
const {User, Post, Comment}=require('../models')

const sequelize = require('../config/connection');

const user = [
  {
    username: 'lamnong',
    password: '123456'
  },
  {
    username: 'lam',
    password: '123456'
  },
  {
    username: 'nong',
    password: '123456'
  },
];

const posts = [
  {
    title:'programming is not easy',
    content: 'need to work hard',
    user_id: 3
  },
  {
    title: 'logics are so complicated to express out',
    content: 'critical thinking',
    user_id: 2
  },
  {
    title: 'algorithsm',
    content: 'math is the key',
    user_id: 1
  },
];

const comment = [
  {
    content: 'this is horrible',
    user_id: 3,
    post_id: 1
  },
  {
    content: 'how can they think',
    user_id: 2,
    post_id: 1
  },
];

const seedAll =async ()=> {
  await User.bulkCreate(users);
  await Post.bulkCreate(posts);
  await Comment.bulkCreate(comments);
};

seedAll();

// const seedAll = async () => {
//   await sequelize.sync({ force: true });
//     console.log('\n----- DATABASE SYNCED -----\n');
  
//   await seedUsers();
//     console.log('\n----- USERS SEEDED -----\n');
  
//   await seedPosts();
//     console.log('\n----- POSTS SEEDED -----\n');

//   await seedComments();
//     console.log('\n----- COMMENTS SEEDED -----\n');

//   process.exit(0);
// };

// seedAll();
