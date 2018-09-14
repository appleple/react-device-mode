"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reResizable = _interopRequireDefault(require("re-resizable"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _context = require("../context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  border: 1px solid #CCC;\n  border-radius: 2px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 20px auto;\n  border: 2px solid #bcbcbc;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transform: scale(", ");\n  transform-origin: top center;\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  background-color: #DDDDDD;\n  height: 100vh;\n  padding-top: ", "px;\n  box-sizing: border-box;\n  overflow: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FrameLeft = 18;
var FrameRight = 18;
var FrameTop = 60;
var FrameBottom = 70;

var DeviceContainer = _styledComponents.default.div(_templateObject(), FrameTop);

var DeviceWrapper = _styledComponents.default.div(_templateObject2(), function (props) {
  if (props.scale === -1) {
    return (window.innerHeight - 235) / props.height;
  } else {
    return props.scale / 100;
  }
}, function (props) {
  return props.resizable ? '' : "\n  ".concat(props.orientation === 'portrait' || props.resizable === true ? "\n    padding-top: ".concat(FrameTop, "px;\n    padding-left: ").concat(FrameLeft, "px;\n    padding-right: ").concat(FrameRight, "px;\n    padding-bottom: ").concat(FrameBottom, "px;\n  ") : "\n    padding-top: ".concat(FrameRight, "px;\n    padding-left: ").concat(FrameTop, "px;\n    padding-right: ").concat(FrameBottom, "px;\n    padding-bottom: ").concat(FrameLeft, "px;\n  "), "\n  border-radius: 35px;\n  clear: both;\n  background: #333;\n  box-sizing: border-box;\n  &:before {\n    content: \"\";\n    border: 2px solid #bcbcbc;\n    position: absolute;\n    ").concat(props.orientation === 'portrait' || props.resizable === true ? "\n      bottom: 10px;\n      left: calc(50% - 20px);\n    " : "\n      right: 10px;\n      bottom: calc(50% - 20px);\n    ", "\n    width: 40px;\n    height: 40px;\n    border-radius: 20px;\n    box-sizing: border-box;\n  }\n  &:after {\n    content: \"\";\n    border: 3px solid #bcbcbc;\n    position: absolute;\n    ").concat(props.orientation === 'portrait' || props.resizable === true ? "\n      top: 25px;\n      left: calc(50% - 40px);\n      width: 80px;\n      height: 6px;\n    " : "\n      left: 25px;\n      top: calc(50% - 40px);\n      width: 6px;\n      height  80px;\n    ", "\n    border-radius: 5px;\n    box-sizing: border-box;\n  }\n  ");
});

var DeviceScreen = _styledComponents.default.iframe(_templateObject3());

var Device =
/*#__PURE__*/
function (_Component) {
  _inherits(Device, _Component);

  function Device(props) {
    var _this;

    _classCallCheck(this, Device);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Device).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "iframe", void 0);

    _this.state = {
      refreshTime: props.refreshTime || new Date()
    };
    return _this;
  }

  _createClass(Device, [{
    key: "getRisizeConf",
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
        return Object.assign({}, resizeConf, {
          right: true,
          bottom: true
        });
      }

      return resizeConf;
    }
  }, {
    key: "getSize",
    value: function getSize(state) {
      var width = state.width + FrameLeft + FrameRight + 6;
      var height = state.height + FrameTop + FrameBottom + 6;

      if (state.orientation === 'portrait' || state.resizable === true) {
        return {
          width: width,
          height: height
        };
      }

      return {
        width: height,
        height: width
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var refreshTime = this.props.refreshTime;
      return _react.default.createElement(_context.DeviceModeContext.Consumer, null, function (context) {
        return _react.default.createElement(DeviceContainer, null, _react.default.createElement(_reResizable.default, {
          enable: _this2.getRisizeConf(context.state.resizable),
          size: _this2.getSize(context.state),
          onResizeStop: function onResizeStop(e, direction, ref, d) {
            context.actions.updateSize(context.state.width + d.width, context.state.height + d.height);
          }
        }, _react.default.createElement(DeviceWrapper, {
          resizable: context.state.resizable,
          scale: context.state.scale,
          height: context.state.height,
          orientation: context.state.orientation
        }, _react.default.createElement(DeviceScreen, {
          src: "".concat(context.state.src, "?time=").concat(refreshTime),
          innerRef: function innerRef(iframe) {
            _this2.iframe = iframe;
          }
        }))));
      });
    }
  }]);

  return Device;
}(_react.Component);

exports.default = Device;