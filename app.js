var Xray = require("x-ray");
var fs = require("fs");

var xray = new Xray();

xray('http://en.wikipedia.org/wiki/Pluto', 'img',
 [{

  img: '',
  src: '@src',
  width: '@width',
  height: '@height'

  }]
)
(function (err, results){
  results = results.filter(function(image){
    return image.width > 100;
  });

  fs.writeFile('./scrape_output.json', JSON.stringify(results, null, '\t'));

})

