var express = require('express'); // call express
var bodyParser = require('body-parser');
var request = require('request');
var app = express(); // define our app using express
var cors = require('cors')

var proxyUrl = 'https://covidtracking.com';

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 4000; // set our port

app.get('/api/us', (req, res, next) => {
  request(`${proxyUrl}/api/us`, function (error, response, body) {
    res.send(body);
  })
})

app.get('/api/states', (req, res, next) => {
  request(`${proxyUrl}/api/states`, function (error, response, body) {
    res.send(body);
  })
})

app.get('/api/states/info', (req, res, next) => {
  request(`${proxyUrl}/api/states/info`, function (error, response, body) {
    res.send(body);
  })
})


app.listen(port);
console.log('Magic happens on port ' + port);
