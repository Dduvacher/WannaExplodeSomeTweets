# WannaExplodeSomeTweets
Tweet wall and explosions

## Installation
Node.js is required to run this application and we will use npm to install packages.

run `npm install` in the folder, to install the required package.

### Packages used:

- socket.io
- request
- twitter
- file-system
- dotenv

## Configuration

### Twitter Acces
In the file .env, you must put your different token to allow the application to connect at Twitter:

~~~
TWITTER_CONSUMER_KEY="your consumer key"
TWITTER_CONSUMER_SECRET="your consumer secret"
TWITTER_ACCESS_TOKEN_KEY="your token key"
TWITTER_ACCESS_TOKEN_SECRET="your token secret"
~~~

### Tweet Wall Configuration
Still in the .env file, you must declare the hashtag you want to show in the tweet wall:

~~~
TWEETWALL_HASHTAG="your hashtag"
~~~

## Run

When everything are set up you can run`node tweeterInteraction.js` in the folder, to run the application.
Then you'll see the result at [localhost:8080](https://localhost:8080)