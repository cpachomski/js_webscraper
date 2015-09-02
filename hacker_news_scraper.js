var Xray = require("x-ray");
var fs = require('fs')

var xray = new Xray();

xray('https://news.ycombinator.com/', '.athing',
 [{

  rank: '.rank',
  title: 'td:nth-child(3) a',
  link: 'td:nth-child(3) a@href'

  }]
)

  .paginate('a[rel="nofollow"]:last-child@href')
  .limit(3)
  .write('./hacker_news_output.json');

