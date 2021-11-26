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
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Backend portal

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/info.html');
});

app.use('/positions', positionRoute);

app.use((req, res) => {
  res.status(404).send('Generic error');
});

app.listen(SERVER_PORT, () => {
  console.log('Connected to port', SERVER_PORT)
})
