var request = require("request");
var _ = require("underscore");

/*
 * GET home page.
 */

exports.index = function(req, res){

  var todaysDate = new Date().getDate().toString();
  var uri2 = "http://api.biblia.com/v1/bible/content/kjv.json?passage=Proverbs" + todaysDate +
  "&style=oneVersePerLineFullReference" +
  "&key=" + process.env.REGISTERED_BIBLIA_KEY

  request({
    uri: uri2,
    }, function(error, response, body) {
    var verseArray = [];
    var filteredArray = [];
    var shuffledArray = [];

    response  = JSON.parse(body);
    verseArray = (response.text).split(/\r*\n*Proverbs \d*:\d* /)
    filteredArray = _.without(verseArray, "");
    shuffledArray = _.shuffle(filteredArray);

    res.render('index', {
        title: 'The Proverbial Shake',
        todaysDate: todaysDate,
        verses: JSON.stringify(shuffledArray),
    });
  });
};
