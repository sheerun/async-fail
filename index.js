var download = require('download');
var fs = require('fs');

download('https://nodejs.org/dist/v4.4.5/node-v4.4.5-linux-x86.tar.xz', { extract: true }).then(function (data) {
  fs.writeFileSync('lorem.txt', data);
});
