const express = require('express');
const hbs = require('hbs');
const app = express();
require('dotenv').config();

const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

const contents = {
  titulo: 'Curso de Node',
  nombre: 'Alex Cabello',
}

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', contents);
});

app.get('/generic', function (req, res) {
  res.render('generic', {
    ...contents,
    tier: 'alt'
  })
});

app.get('/elements', function (req, res) {
  res.render('elements', {
    ...contents,
    tier: 'alt'
  })
});

app.listen(port);