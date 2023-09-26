const express = require("express");
const sequelize = require("./config/connection");
const routes = require("./controllers");
const path = require("path");
const session = require("express-session");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({ helpers });
const sess = {
  secret: "Super secret secret",
  resave: false,
  saveUninitialized: false,
};

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sess));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});


app.get('/signup', (req, res) =>
{
  res.render('signup');
});

app.get('/login', (req, res) =>
{
  res.render('login');
});


app.get('/index', (req, res) =>
{
  res.render('index');
});

app.get('/review', (req, res) =>
{
  res.render('review');
})