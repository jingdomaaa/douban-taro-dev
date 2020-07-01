"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detail = exports.getInTheaters = undefined;

var getInTheaters = exports.getInTheaters = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0, _request2.default)(_config2.default.API_HOST + "/movie/in_theaters?" + (0, _index.stringify)(params)));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getInTheaters(_x) {
    return _ref.apply(this, arguments);
  };
}();

var detail = exports.detail = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id, params) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", (0, _request2.default)(_config2.default.API_HOST + "/movie/subject/" + id + "?" + (0, _index.stringify)(params)));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function detail(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var _index = require("../npm/qs/lib/index.js");

var _request = require("../utils/request.js");

var _request2 = _interopRequireDefault(_request);

var _config = require("../common/config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }