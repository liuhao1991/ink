const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.json([1, 2, 3]);
});

app.post('/api/login', (req, res) => {
  res.cookie('token', req.body.username, { httpOnly: true });
  res.json([1, 2, 3]);
});

app.get('/api/profile', (req, res) => {
  console.log(req.cookies);
  res.json([req.cookies]);
});

app.listen(5000, () => {
  console.log('web server listening on port 5000');
});