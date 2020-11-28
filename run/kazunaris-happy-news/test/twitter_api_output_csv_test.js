const Twitter = require('twitter');

const client = new Twitter({
  consumer_key:        'bMuXNzI4awteVBneZWDczSvgK',
  consumer_secret:     'iq79SpnbnWzxI2an8s3mVdCG7690rhaY7UMMLZtxtmNbNt6k72',
  access_token_key:    '1319826967416369152-b4SbQEObe23UqM5CC9NZtnXT8TttTA',
  access_token_secret: 'ZZ7PcGXhMwhkwDv4BPmnjw3yEdRyGf2SCyqCFLGPWFwvf',
});

const {createObjectCsvWriter} = require('csv-writer');
const csvfilepath =  '/Users/admin/Documents/kazunarihappynews/run/kazunaris-happy-news/test/data.csv';
const csvWriter = createObjectCsvWriter({
    path: csvfilepath,
    header: ['created_at','text'],
    encoding: 'utf8',
    append : true,
});

const params = {count:5};

client.get('statuses/home_timeline', params, function(error,tweets,response){
  if (!error) {
    for (var it in tweets)
      {
        const tweet = tweets[it]
        csvWriter.writeRecords([{created_at: tweet.created_at, text: tweet.text}]);
      }
  }
});