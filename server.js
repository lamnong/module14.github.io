const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/Connection');
const path = require('path');
const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');
// const models =require('./models')

const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const store = new SequelizeStore({
  db: sequelize
});

const sess = {
  secret: 'nooneknow',
  cookie: {
        // Session will automatically expire in 10 minutes
        expires: 10 * 60 * 1000
  },
  resave: true,
  rolling: true,
  saveUninitialized: true,
  store,
};


const hbs = exphbs.create({ helpers });


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));

app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(routes);
// set up controllers after static setup
app.use(require('./controllers/'));

// require('/models');
async function run() {
  store.sync();
  // await sequelize.sync({ force: true })//.then(() => require('./seeds'))
  console.log(`DB synced`);

  // turn on connection to db and server
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
}

run();