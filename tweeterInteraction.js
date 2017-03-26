var request = require('request');
var Twitter = require('twitter');
var http = require('http');
var express = require('express');
var app = express();
require('dotenv').config();


app.get('/tweetwall', function(req, res) {
    res.render('tweetwallview.ejs');
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  bearer_token: process.env.TWITTER_BEARER_TOKEN
});

/*client.get('search/tweets', {q: '#pixelart'}, function(error, tweets, response) {
   console.log(tweets);
});*/

app.listen(8080);