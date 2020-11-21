var Twitter = require('twitter');

var client = new Twitter({
  consumer_key:        'bMuXNzI4awteVBneZWDczSvgK',
  consumer_secret:     'iq79SpnbnWzxI2an8s3mVdCG7690rhaY7UMMLZtxtmNbNt6k72',
  access_token_key:    '1319826967416369152-b4SbQEObe23UqM5CC9NZtnXT8TttTA',
  access_token_secret: 'ZZ7PcGXhMwhkwDv4BPmnjw3yEdRyGf2SCyqCFLGPWFwvf',
})

const params = {count:5};

client.get('statuses/home_timeline', params, function(error,tweets,response){
  if (!error) {
      console.log(tweets);
      for (var it in tweets)
          {
          const tweet = tweets[it]
          console.log (tweet.created_at)
          console.log (tweet.text)
          }
  }
});