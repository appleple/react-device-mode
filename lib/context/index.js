'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeviceModeContext = exports.DeviceMode = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DeviceMode = exports.DeviceMode = {
  width: 375,
  height: 667,
  ratio: 1,
  orientation: 'portrait',
  ua: '',
  src: '',
  resizable: false,
  scale: 100
};

var DeviceModeContext = exports.DeviceModeContext = _react2.default.createContext(DeviceMode);