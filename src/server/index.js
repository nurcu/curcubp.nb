const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Express Route
const positionRoute = require('./routes/position.route')

const MONGO_DB_URI = process.env.MONGO_DB_URI;
const SERVER_PORT = process.env.SERVER_PORT || 4000;

console.log('Connecting to database...');

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_DB_URI, {
  useNewUrlParser: true
}).then(() => {
  console.log('Database successfully connected!')
},
  error => {
    console.error('Could not connect to database:', error)
  }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/positions', positionRoute)


app.listen(SERVER_PORT, () => {
  console.log('Connected to port', SERVER_PORT)
})

// 404 Error
app.use((req, res, next) => {
  next(new SyntaxError(404));
});

app.use(function (err, req, res, next) {
  console.error('Server error:', err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
