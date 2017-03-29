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
    consumer_key: 'abcL7kmNE4QIundiHzNEt0xZh',
    consumer_secret: 'KtabYRjUKCeXXlHxA1yenbjoL9wfT3hqU9CDVdgKHybw56L4rA',
    access_token_key: '845604067628011520-W3gimsKlVugnsy3IexCSDkXYexJwNtw',
    access_token_secret: 'ZCihcrk9g4oWeJ5mNxlL5aohXJmHkRPI2F5yienF3svvJ'
});


io.sockets.on('connection', function (socket) {
	console.log('Socket.io connected');
	
	// STREAM TWITTER
	twitter.stream('statuses/filter', { track: '#pixelart' },
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