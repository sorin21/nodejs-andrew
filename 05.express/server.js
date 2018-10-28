const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// Next exists so you can tell express that 
// when your middleware function is done
app.use((req, res, next) => {
  const now = new Date().toString();
  const log = `${now} ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if(err) {
      console.log('Unabe to append to server.log');
    }
  });
  next();
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// })

// that static takes the absolute path to 
// the folder you want to serve up 
app.use(express.static(__dirname + '/public'));

// name of the helper and func to run
hbs.registerHelper('currentYear', () => {
  return new Date().getFullYear();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home page',
    welcome: 'Welcome to Express Website',
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About page',
  });
});

app.get('/bad', (req, res) => {
  res.send('<h1>Bad request</h1>');
});

app.listen(3000, () => {
  console.log('Server started at port 3000')
});