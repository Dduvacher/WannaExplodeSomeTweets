var request = require('request');
var fs = require('fs');


var consumer_key = 'abcL7kmNE4QIundiHzNEt0xZh';
var consumer_secret = 'KtabYRjUKCeXXlHxA1yenbjoL9wfT3hqU9CDVdgKHybw56L4rA';
var encode_secret = new Buffer(consumer_key + ':' + consumer_secret).toString('base64');

var options = {
    url: 'https://api.twitter.com/oauth2/token',
    headers: {
        'Authorization': 'Basic ' + encode_secret,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
    body: 'grant_type=client_credentials'
};

request.post(options, function(error, response, body) {
	fs.writeFile("./BearerToken.txt", body, function(err) {
		if(err) {
			return console.log(err);
		}

		console.log("The file was saved!");
	});
    console.log(body); // <<<< This is your BEARER TOKEN !!!
});