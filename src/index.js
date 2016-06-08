var download = require('download');

async function main() {
  var data = await download('https://nodejs.org/dist/v4.4.5/node-v4.4.5-linux-x86.tar.xz');
  console.log('Downloaded');
  console.log(data.length);
}

main().then(function (result) {
  console.log('ok', result);
}).catch(function (e) {
  console.log('err', e);
});
