var Xray = require("x-ray");

var xray = new Xray();

xray('http://en.wikipedia.org/wiki/Pluto', 'img',
 [{

  img: '',
  src: '@src',
  width: '@width',
  height: '@height'

  }])
    .write('scrape_output.json');

