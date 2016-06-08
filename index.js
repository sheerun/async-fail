var download = require('download');
var fs = require('fs');

download('https://raw.githubusercontent.com/sheerun/async-fail/extract/lorem.txt.gz', { extract: true }).then(function (data) {
  console.log(data);
  fs.writeFileSync('lorem.txt', data);
});
