const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Express Routes
const positionRoute = require('./routes/position.route')
const pingRoute = require('./routes/ping.route')

const SERVER_PORT = process.env.SERVER_PORT || 4000;


// Backend portal

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/info.html');
});

app.use('/positions', positionRoute);
app.use('/ping', pingRoute);

app.use((req, res) => {
  res.status(404).send('Generic error');
});

app.listen(SERVER_PORT, () => {
  console.log('Connected to port', SERVER_PORT)
})
