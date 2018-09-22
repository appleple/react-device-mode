"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeviceModeContext = exports.DeviceMode = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DeviceMode = {
  devices: [],
  width: 375,
  height: 667,
  orientation: 'portrait',
  ua: '',
  src: '',
  resizable: false,
  hasFrame: false,
  scale: 100,
  i18n: {
    fitWindow: 'fitWindow'
  }
};
exports.DeviceMode = DeviceMode;

var DeviceModeContext = _react.default.createContext(DeviceMode);

exports.DeviceModeContext = DeviceModeContext;