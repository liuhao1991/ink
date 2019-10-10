const express = require('express');
// const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session')

const app = express();
// app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
  secret: 'keyboard cat',
  name: '_ink_session',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: true,
    httpOnly: true,
    maxAge: 1000 * 60 * 60
  },
  rolling:false,
}));

app.get('/', (req, res) => {
  res.json([1, 2, 3]);
});

app.post('/api/login', (req, res) => {
  res.cookie('_ink_session', req.sessionID);
  res.json([1, 2, 3]);
});

app.get('/api/profile', (req, res) => {
  console.log(req.sessionID, req.cookies);
  res.json([req.session]);
});

app.listen(5000, () => {
  console.log('web server listening on port 5000');
});

'sLIjjTe_9QQlnNpb8Yqp3CVVmuclHflXI_BklOyUsuxF2o0ugC5_Lu74BinjLVUeo_uscgchCJX04aqHlXBiCQ=='