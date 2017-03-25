var request = require('request');
var Twitter = require('twitter');
require('dotenv').config();

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  bearer_token: process.env.TWITTER_BEARER_TOKEN
});

client.get('search/tweets', {q: '#pixelart'}, function(error, tweets, response) {
   console.log(tweets);
});