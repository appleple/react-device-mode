"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reResizable = _interopRequireDefault(require("re-resizable"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _context = require("../context");

var _util = require("../util");

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

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 101;\n  top: 50%;\n  left: 50%;\n  width: 30px;\n  height: 30px;\n  margin-top: -15px;\n  margin-left: -15px;\n  border: 8px solid #333;\n  border-right-color: transparent;\n  border-radius: 50%;\n  animation: ", " .5s infinite linear;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  background-color: #eee;\n  position: relative;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  border: 1px solid #CCC;\n  border-radius: 2px;\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 auto;\n  border: 2px solid #bcbcbc;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  animation ", " .5s ease-out;\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  transform: scale(", ");\n  transform-origin: top center;\n  .handle-right {\n    position: relative;\n    background: #bbb;\n    transition: background .3s;\n    ", " \n    &:hover {\n      background: #999;\n    }\n    &:before {\n      content: \"\";\n      display: block;\n      position: absolute;\n      top: 50%;\n      border-radius: 2px;\n      ", "\n      background-color: #fff;\n    }\n    &:after {\n      content: \"\";\n      display: block;\n      position: absolute;\n      top: 50%;\n      border-radius: 2px;\n      ", "\n      background-color: #fff;\n    }\n  }\n  .handle-bottom {\n    background: #999;\n    position: relative;\n    background: #bbb;\n    transition: background .3s;\n    ", "\n    &:hover {\n      background: #999;\n    }\n    &:before {\n      content: \"\";\n      display: block;\n      position: absolute;\n      left: 50%;\n      border-radius: 2px;\n      ", "\n      background-color: #fff;\n    }\n    &:after {\n      content: \"\";\n      display: block;\n      position: absolute;\n      top: 6px;\n      left: 50%;\n      border-radius: 2px;\n      ", "\n      background-color: #fff;\n    }\n  }\n  .handle-bottom-right {\n    background: #bbb;\n    transition: background .3s;\n    ", " \n    &:hover {\n      background: #999;\n    }\n    &:before {\n      content: \"\";\n      display: block;\n      position: absolute;\n      background-color: #fff;\n      transform: rotate(-45deg);\n      border-radius: 2px;\n      ", "\n    }\n    &:after {\n      content: \"\";\n      display: block;\n      position: absolute;\n      background-color: #fff;\n      transform: rotate(-45deg);\n      border-radius: 2px;\n      ", "\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  background-color: #DDDDDD;\n  height: 100%;\n  padding-top: ", "px;\n  padding-right: 10px;\n  padding-left: 10px;\n  box-sizing: border-box;\n  overflow: auto;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    opacity: .4;\n    transform: rotate(0deg);\n  }\n  50% {\n    opacity: 1;\n    transform: rotate(180deg);\n  }\n  100% {\n    opacity: .4;\n    transform: rotate(360deg);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  from {\n    transform: translateY(-30px);\n    opacity: 0;\n  }\n\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n"]);

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
var deviceAnimation = (0, _styledComponents.keyframes)(_templateObject());
var spinnerAnimation = (0, _styledComponents.keyframes)(_templateObject2());

var DeviceContainer = _styledComponents.default.div(_templateObject3(), FrameTop + 20);

var DeviceScaler = _styledComponents.default.div(_templateObject4(), function (props) {
  if (props.scale === -1) {
    return (window.innerHeight - 235) / props.height;
  } else {
    return props.scale / 100;
  }
}, function (props) {
  return "\n    right: -".concat(1 / props.scale * 2000, "px !important;\n    width: ").concat(1 / props.scale * 2000, "px !important\n    ");
}, function (props) {
  return "\n        left: ".concat(1 / props.scale * 600, "px;\n        width: ").concat(1 / props.scale * 300, "px;\n        height: ").concat(1 / props.scale * 3000, "px;\n        margin-top: -").concat(1 / props.scale * 1500, "px;\n      ");
}, function (props) {
  return "\n        left: ".concat(1 / props.scale * 1200, "px;\n        width: ").concat(1 / props.scale * 300, "px;\n        height: ").concat(1 / props.scale * 3000, "px;\n        margin-top: -").concat(1 / props.scale * 1500, "px;\n      ");
}, function (props) {
  return "\n    bottom: -".concat(1 / props.scale * 2000, "px !important;\n    height: ").concat(1 / props.scale * 2000, "px !important\n    ");
}, function (props) {
  return "\n        top: ".concat(1 / props.scale * 600, "px;\n        height: ").concat(1 / props.scale * 300, "px;\n        width: ").concat(1 / props.scale * 3000, "px;\n        margin-left: -").concat(1 / props.scale * 1500, "px;\n      ");
}, function (props) {
  return "\n        top: ".concat(1 / props.scale * 1200, "px;\n        height: ").concat(1 / props.scale * 300, "px;\n        width: ").concat(1 / props.scale * 3000, "px;\n        margin-left: -").concat(1 / props.scale * 1500, "px;\n      ");
}, function (props) {
  return "\n      right: -".concat(1 / props.scale * 2000, "px !important;\n      bottom: -").concat(1 / props.scale * 2000, "px !important;\n      height: ").concat(1 / props.scale * 2000, "px !important;\n      width: ").concat(1 / props.scale * 2000, "px !important;\n    ");
}, function (props) {
  return "\n      top: ".concat(1 / props.scale * 800, "px;\n      left: 0;\n      height: ").concat(1 / props.scale * 300, "px;\n      width: ").concat(1 / props.scale * 2000, "px;\n      ");
}, function (props) {
  return "\n      top: ".concat(1 / props.scale * 1300, "px;\n      left: ").concat(1 / props.scale * 800, "px;\n      height: ").concat(1 / props.scale * 300, "px;\n      width: ").concat(1 / props.scale * 1200, "px;\n      ");
});

var DeviceWrapper = _styledComponents.default.div(_templateObject5(), deviceAnimation, function (props) {
  return props.resizable || !props.hasFrame ? '' : "\n  ".concat(props.orientation === 'portrait' || props.resizable === true ? "\n    padding-top: ".concat(FrameTop, "px;\n    padding-left: ").concat(FrameLeft, "px;\n    padding-right: ").concat(FrameRight, "px;\n    padding-bottom: ").concat(FrameBottom, "px;\n  ") : "\n    padding-top: ".concat(FrameRight, "px;\n    padding-left: ").concat(FrameTop, "px;\n    padding-right: ").concat(FrameBottom, "px;\n    padding-bottom: ").concat(FrameLeft, "px;\n  "), "\n  border-radius: 35px;\n  clear: both;\n  background: #333;\n  box-sizing: border-box;\n  &:before {\n    content: \"\";\n    border: 2px solid #bcbcbc;\n    position: absolute;\n    ").concat(props.orientation === 'portrait' || props.resizable === true ? "\n      bottom: 10px;\n      left: calc(50% - 20px);\n    " : "\n      right: 10px;\n      bottom: calc(50% - 20px);\n    ", "\n    width: 40px;\n    height: 40px;\n    border-radius: 20px;\n    box-sizing: border-box;\n  }\n  &:after {\n    content: \"\";\n    border: 3px solid #bcbcbc;\n    position: absolute;\n    ").concat(props.orientation === 'portrait' || props.resizable === true ? "\n      top: 25px;\n      left: calc(50% - 40px);\n      width: 80px;\n      height: 6px;\n    " : "\n      left: 25px;\n      top: calc(50% - 40px);\n      width: 6px;\n      height  80px;\n    ", "\n    border-radius: 5px;\n    box-sizing: border-box;\n  }\n  ");
});

var DeviceScreen = _styledComponents.default.iframe(_templateObject6(), function (props) {
  return !props.isLoading ? 'display: block;' : 'display: none;';
});

var LoadingScreen = _styledComponents.default.div(_templateObject7());

var Spinner = _styledComponents.default.div(_templateObject8(), spinnerAnimation);

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
          bottom: true,
          bottomRight: true
        });
      }

      return resizeConf;
    }
  }, {
    key: "getSize",
    value: function getSize(state) {
      if (!state.hasFrame) {
        return {
          width: state.width + 2,
          height: state.height + 2
        };
      }

      var width = state.width + FrameLeft + FrameRight + 6;
      var height = state.height + FrameTop + FrameBottom + 6;

      if (state.orientation === 'portrait') {
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
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var iframe = this.iframe;
      (0, _util.onIframeUrlChange)(iframe, function (url) {
        if (_this2.props.onUrlChange) {
          _this2.props.onUrlChange(url);
        }
      });

      if (this.props.getIframe) {
        this.props.getIframe(iframe);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          refreshTime = _this$props.refreshTime,
          isLoading = _this$props.isLoading;
      return _react.default.createElement(_context.DeviceModeContext.Consumer, null, function (context) {
        return _react.default.createElement(DeviceContainer, null, _react.default.createElement(DeviceScaler, {
          scale: context.state.scale
        }, _react.default.createElement(_reResizable.default, {
          enable: _this3.getRisizeConf(context.state.resizable),
          size: _this3.getSize(context.state),
          onResizeStop: function onResizeStop(e, direction, ref, d) {
            context.actions.updateSize(context.state.width + d.width, context.state.height + d.height);
          },
          handleClasses: {
            right: 'handle-right',
            bottom: 'handle-bottom',
            bottomRight: 'handle-bottom-right'
          }
        }, _react.default.createElement(DeviceWrapper, {
          resizable: context.state.resizable,
          height: context.state.height,
          orientation: context.state.orientation,
          hasFrame: context.state.hasFrame
        }, isLoading && _react.default.createElement(LoadingScreen, null, _react.default.createElement(Spinner, null)), _react.default.createElement(DeviceScreen, {
          isLoading: isLoading,
          src: _this3.props.getUrl({
            url: context.state.src,
            refreshTime: refreshTime,
            ua: context.state.ua
          }),
          innerRef: function innerRef(iframe) {
            _this3.iframe = iframe;
          }
        })))));
      });
    }
  }]);

  return Device;
}(_react.Component);

exports.default = Device;

_defineProperty(Device, "defaultProps", {
  isLoading: false,
  getUrl: function getUrl(_ref) {
    var url = _ref.url,
        refreshTime = _ref.refreshTime,
        ua = _ref.ua;
    return url;
  }
});