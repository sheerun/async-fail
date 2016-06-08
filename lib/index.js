'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var main = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var data;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return download('https://nodejs.org/dist/v4.4.5/node-v4.4.5-linux-x86.tar.xz');

          case 2:
            data = _context.sent;

            console.log(data.length);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return function main() {
    return ref.apply(this, arguments);
  };
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var download = require('download');

main().then(function (result) {
  console.log('ok', result);
}).catch(function (e) {
  console.log('err', e);
});