let Twitter = require('twitter');

let client = new Twitter({
  consumer_key:        'bMuXNzI4awteVBneZWDczSvgK',
  consumer_secret:     'iq79SpnbnWzxI2an8s3mVdCG7690rhaY7UMMLZtxtmNbNt6k72',
  access_token_key:    '1319826967416369152-b4SbQEObe23UqM5CC9NZtnXT8TttTA',
  access_token_secret: 'ZZ7PcGXhMwhkwDv4BPmnjw3yEdRyGf2SCyqCFLGPWFwvf',
});

let cron = require('node-cron');
 
cron.schedule('* * * * *', () => {
  console.log(tweetsget());
});

function tweetsget() {
  const params = {count:5};

  client.get('statuses/home_timeline', params, function(error,tweets,response){
    if (!error) {
      for (var it in tweets)
        {
          const tweet = tweets[it]
          console.log (tweet.created_at);
          console.log (tweet.text);
        }
    }
  });
}