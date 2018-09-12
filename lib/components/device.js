'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: 70%;\n'], ['\n  width: 70%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin: 20px auto;\n  border: 2px solid #bcbcbc;\n  width: 100%;\n  height: 100%;\n  padding-top: ', 'px;\n  padding-left: ', 'px;\n  padding-right: ', 'px;\n  padding-bottom: ', 'px;\n  position: relative;\n  border-radius: 35px;\n  clear: both;\n  background: #fff;\n  box-sizing: border-box;\n  &:before {\n    content: "";\n    border: 2px solid #bcbcbc;\n    position: absolute;\n    bottom: 10px;\n    left: calc(50% - 20px);\n    width: 40px;\n    height: 40px;\n    border-radius: 20px;\n    box-sizing: border-box;\n  }\n  &:after {\n    content: "";\n    border: 3px solid #bcbcbc;\n    position: absolute;\n    top: 25px;\n    left: calc(50% - 40px);\n    width: 80px;\n    height: 6px;\n    border-radius: 5px;\n    box-sizing: border-box;\n  }\n'], ['\n  margin: 20px auto;\n  border: 2px solid #bcbcbc;\n  width: 100%;\n  height: 100%;\n  padding-top: ', 'px;\n  padding-left: ', 'px;\n  padding-right: ', 'px;\n  padding-bottom: ', 'px;\n  position: relative;\n  border-radius: 35px;\n  clear: both;\n  background: #fff;\n  box-sizing: border-box;\n  &:before {\n    content: "";\n    border: 2px solid #bcbcbc;\n    position: absolute;\n    bottom: 10px;\n    left: calc(50% - 20px);\n    width: 40px;\n    height: 40px;\n    border-radius: 20px;\n    box-sizing: border-box;\n  }\n  &:after {\n    content: "";\n    border: 3px solid #bcbcbc;\n    position: absolute;\n    top: 25px;\n    left: calc(50% - 40px);\n    width: 80px;\n    height: 6px;\n    border-radius: 5px;\n    box-sizing: border-box;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  border: 1px solid #CCC;\n  border-radius: 2px;\n'], ['\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  border: 1px solid #CCC;\n  border-radius: 2px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reResizable = require('re-resizable');

var _reResizable2 = _interopRequireDefault(_reResizable);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _context = require('../context');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FrameLeft = 18;
var FrameRight = 18;
var FrameTop = 50;
var FrameBottom = 70;

var DeviceContainer = _styledComponents2.default.div(_templateObject);

var DeviceWrapper = _styledComponents2.default.div(_templateObject2, FrameTop, FrameLeft, FrameRight, FrameBottom);

var DeviceScreen = _styledComponents2.default.iframe(_templateObject3);

var Device = function (_Component) {
  _inherits(Device, _Component);

  function Device() {
    _classCallCheck(this, Device);

    return _possibleConstructorReturn(this, (Device.__proto__ || Object.getPrototypeOf(Device)).apply(this, arguments));
  }

  _createClass(Device, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var contentWindow = this.iframe.contentWindow;
      if (contentWindow && contentWindow.navigator) {
        contentWindow.navigator.__defineGetter__('userAgent', function () {
          return this.ua;
        });
      }
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
              'p',
              null,
              context.state.name
            ),
            _react2.default.createElement(
              _reResizable2.default,
              { size: { width: context.state.width + FrameLeft + FrameRight + 6, height: context.state.height + FrameTop + FrameBottom + 6 }, onResizeStop: function onResizeStop(e, direction, ref, d) {
                  context.actions.updateSize(context.state.width + d.width, context.state.height + d.height);
                } },
              _react2.default.createElement(
                DeviceWrapper,
                null,
                _react2.default.createElement(DeviceScreen, { src: '' + context.state.src, innerRef: function innerRef(iframe) {
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