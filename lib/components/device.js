'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: center;\n  background-color: #DDDDDD;\n  height: 100vh;\n  padding-top: 50px;\n  box-sizing: border-box;\n  overflow: auto;\n'], ['\n  display: flex;\n  justify-content: center;\n  background-color: #DDDDDD;\n  height: 100vh;\n  padding-top: 50px;\n  box-sizing: border-box;\n  overflow: auto;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin: 20px auto;\n  border: 2px solid #bcbcbc;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transform: scale(', ');\n  transform-origin: top center;\n  ', '\n'], ['\n  margin: 20px auto;\n  border: 2px solid #bcbcbc;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transform: scale(', ');\n  transform-origin: top center;\n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  border: 1px solid #CCC;\n  border-radius: 2px;\n'], ['\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  border: 1px solid #CCC;\n  border-radius: 2px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reResizable = require('re-resizable');

var _reResizable2 = _interopRequireDefault(_reResizable);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _context = require('../context');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FrameLeft = 18;
var FrameRight = 18;
var FrameTop = 50;
var FrameBottom = 70;

var DeviceContainer = _styledComponents2.default.div(_templateObject);

var DeviceWrapper = _styledComponents2.default.div(_templateObject2, function (props) {
  if (props.scale === -1) {
    return (window.innerHeight - 235) / props.height;
  } else {
    return props.scale / 100;
  }
}, function (props) {
  return props.resizable ? '' : '\n  ' + (props.orientation === 'portrait' || props.resizable === true ? '\n    padding-top: ' + FrameTop + 'px;\n    padding-left: ' + FrameLeft + 'px;\n    padding-right: ' + FrameRight + 'px;\n    padding-bottom: ' + FrameBottom + 'px;\n  ' : '\n    padding-top: ' + FrameRight + 'px;\n    padding-left: ' + FrameTop + 'px;\n    padding-right: ' + FrameBottom + 'px;\n    padding-bottom: ' + FrameLeft + 'px;\n  ') + '\n  border-radius: 35px;\n  clear: both;\n  background: #333;\n  box-sizing: border-box;\n  &:before {\n    content: "";\n    border: 2px solid #bcbcbc;\n    position: absolute;\n    ' + (props.orientation === 'portrait' || props.resizable === true ? '\n      bottom: 10px;\n      left: calc(50% - 20px);\n    ' : '\n      right: 10px;\n      bottom: calc(50% - 20px);\n    ') + '\n    width: 40px;\n    height: 40px;\n    border-radius: 20px;\n    box-sizing: border-box;\n  }\n  &:after {\n    content: "";\n    border: 3px solid #bcbcbc;\n    position: absolute;\n    ' + (props.orientation === 'portrait' || props.resizable === true ? '\n      top: 25px;\n      left: calc(50% - 40px);\n      width: 80px;\n      height: 6px;\n    ' : '\n      left: 25px;\n      top: calc(50% - 40px);\n      width: 6px;\n      height  80px;\n    ') + '\n    border-radius: 5px;\n    box-sizing: border-box;\n  }\n  ';
});

var DeviceScreen = _styledComponents2.default.iframe(_templateObject3);

var Device = function (_Component) {
  _inherits(Device, _Component);

  function Device() {
    _classCallCheck(this, Device);

    return _possibleConstructorReturn(this, (Device.__proto__ || Object.getPrototypeOf(Device)).apply(this, arguments));
  }

  _createClass(Device, [{
    key: 'getRisizeConf',
    value: function getRisizeConf(resizable) {
      var resizeConf = {
        top: false,
        right: false,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false
      };

      if (resizable) {
        return Object.assign({}, resizeConf, { right: true, bottom: true });
      }
      return resizeConf;
    }
  }, {
    key: 'getSize',
    value: function getSize(state) {
      var width = state.width + FrameLeft + FrameRight + 6;
      var height = state.height + FrameTop + FrameBottom + 6;
      if (state.orientation === 'portrait' || state.resizable === true) {
        return { width: width, height: height };
      }
      return { width: height, height: width };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _context.DeviceModeContext.Consumer,
        null,
        function (context) {
          return _react2.default.createElement(
            DeviceContainer,
            null,
            _react2.default.createElement(
              _reResizable2.default,
              { enable: _this2.getRisizeConf(context.state.resizable), size: _this2.getSize(context.state), onResizeStop: function onResizeStop(e, direction, ref, d) {
                  context.actions.updateSize(context.state.width + d.width, context.state.height + d.height);
                } },
              _react2.default.createElement(
                DeviceWrapper,
                _defineProperty({ resizable: context.state.resizable, scale: context.state.scale, height: context.state.height, orientation: context.state.orientation }, 'resizable', context.state.resizable),
                _react2.default.createElement(DeviceScreen, { key: context.state.ua, src: context.state.src + '?ua=' + context.state.ua, innerRef: function innerRef(iframe) {
                    _this2.iframe = iframe;
                    _this2.ua = context.ua;
                  } })
              )
            )
          );
        }
      );
    }
  }]);

  return Device;
}(_react.Component);

exports.default = Device;