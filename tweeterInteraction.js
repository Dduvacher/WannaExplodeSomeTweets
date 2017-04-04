var request = require('request');
var Twitter = require('twitter');
var fs = require('fs');

require('dotenv').config();


var app = require('http').createServer(function(req, res) {
    fs.readFile('./views/mainview.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});
var io = require('socket.io').listen(app);

var twitter = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});


io.sockets.on('connection', function (socket) {
	console.log('Socket.io connected');
	
	// STREAM TWITTER
	twitter.stream('statuses/filter', { track: process.env.TWEETWALL_HASHTAG },
    function(stream) { 
        stream.on('data', function( tweet ) {
            var tweet_id = tweet.id_str;
            var tweet_text = tweet.text;
			io.sockets.volatile.emit('tweet_stream',
                {
                    id : tweet.id_str,
                    text : tweet.text,
					name : tweet.user.name,
                    userName : tweet.user.screen_name,
                    icon: tweet.user.profile_image_url
                                    });
            console.log(tweet_text);
        });
 
        stream.on('error', function ( error ) {
            console.error(error);
        });
		//END STREAM TWITTER
 
    });
});


	
  
app.listen(8080);