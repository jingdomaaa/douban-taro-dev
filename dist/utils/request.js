'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = request;

var _index = require('../npm/@tarojs/taro-weapp/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function request(url, options) {
  var newOptions = _extends({}, options);
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.header = _extends({
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      }, newOptions.header);
    } else {
      // newOptions.body is FormData
      newOptions.header = _extends({
        Accept: 'application/json'
      }, newOptions.header);
    }
  } else {
    newOptions.header = _extends({
      'Content-Type': 'json'
    }, newOptions.header);
  }

  return _index2.default.request(_extends({ url: url }, newOptions));
}