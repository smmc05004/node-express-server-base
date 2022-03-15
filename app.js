const express = require('express');
const app = express();
const port = 3001;

const flower = require('./route/flower');

app.use(express.static('public'));
app.use(express.json());

app.use('/flower', flower);

app.all(
  '/secret',
  function (req, res, next) {
    console.log('Accessing the secret section ...');
    next(); // pass control to the next handler
  },
  function () {
    console.log('next 실행');
  }
);

app.get('/', (req, res) => res.send('Hello World'));

app.get('/main', function (req, res) {
  res.sendFile(__dirname + '/public/main.html');
});

app.use((req, res, next) => {
  res.status(404).send('sorry cant find!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('something broke!');
});

app.listen(port, function () {
  console.log(`Listening ${port} port`);
});
