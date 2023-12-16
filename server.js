const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const app = express();
const PORT = process.env.PORT || 3001;
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { Sequelize } = require('sequelize');
const sequelize = require('./config/connection')
// let sequelize;



// if (process.env.JAWSDB_URL) {
//   // Use Heroku database
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   // Use local database configuration
//   sequelize = new Sequelize({
//     host: 'localhost',  // Update with your local host
//     username: 'root', // Update with your local username
//     password: 'Hr3694642', // Update with your local password
//     port: 3306,
//     database: 'friends_db', // Update with your local database
//     dialect: 'mysql',
//   });
// }

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
    checkExpirationInterval: 15 * 60 * 1000,
    expiration: 24 * 60 * 60 * 1000,
  }),
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on port ' + PORT));
});
