"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reResizable = require("re-resizable");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _context = require("../context");

var _util = require("../util");

var _constants = require("../constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 101;\n  top: 50%;\n  left: 50%;\n  width: 30px;\n  height: 30px;\n  margin-top: -15px;\n  margin-left: -15px;\n  border: 8px solid #333;\n  border-right-color: transparent;\n  border-radius: 50%;\n  animation: ", " .5s infinite linear;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  background-color: #eee;\n  position: relative;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  background-color: #FFF;\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  border: 2px solid #bcbcbc;\n  animation ", " .5s ease-out;\n  ", "\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 auto;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  ", "\n  ", "\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  transform: scale(", ");\n  transform-origin: top center;\n  .handle-right {\n    position: relative;\n    background: #bbb;\n    transition: background .3s;\n    right: -", "px !important;\n    width: ", "px !important\n    &:hover {\n      background: #999;\n    }\n    &:before {\n      content: \"\";\n      display: block;\n      position: absolute;\n      top: 50%;\n      border-radius: 2px;\n\t\t\tleft: ", "px;\n\t\t\twidth: ", "px;\n\t\t\theight: ", "px;\n\t\t\tmargin-top: -", "px;\n      background-color: #fff;\n    }\n    &:after {\n      content: \"\";\n      display: block;\n      position: absolute;\n      top: 50%;\n      border-radius: 2px;\n\t\t\tleft: ", "px;\n\t\t\twidth: ", "px;\n\t\t\theight: ", "px;\n\t\t\tmargin-top: -", "px;\n      background-color: #fff;\n    }\n  }\n  .handle-bottom {\n    background: #999;\n    position: relative;\n    background: #bbb;\n    transition: background .3s;\n    bottom: -", "px !important;\n    height: ", "px !important\n    &:hover {\n      background: #999;\n    }\n    &:before {\n      content: \"\";\n      display: block;\n      position: absolute;\n      left: 50%;\n      border-radius: 2px;\n      top: ", "px;\n\t\t\theight: ", "px;\n\t\t\twidth: ", "px;\n\t\t\tmargin-left: -", "px;\n      background-color: #fff;\n    }\n    &:after {\n      content: \"\";\n      display: block;\n      position: absolute;\n      top: 6px;\n      left: 50%;\n      border-radius: 2px;\n\t\t\ttop: ", "px;\n\t\t\theight: ", "px;\n\t\t\twidth: ", "px;\n\t\t\tmargin-left: -", "px;\n      background-color: #fff;\n    }\n  }\n  .handle-bottom-right {\n    background: #bbb;\n    transition: background .3s;\n   \tright: -", "px !important;\n\t\tbottom: -", "px !important;\n\t\theight: ", "px !important;\n\t\twidth: ", "px !important;\n\n    &:hover {\n      background: #999;\n    }\n    &:before {\n      content: \"\";\n      display: block;\n      position: absolute;\n      background-color: #fff;\n      transform: rotate(-45deg);\n      border-radius: 2px;\n      top: ", "px;\n      left: 0;\n      height: ", "px;\n      width: ", "px;\n    }\n    &:after {\n      content: \"\";\n      display: block;\n      position: absolute;\n      background-color: #fff;\n      transform: rotate(-45deg);\n      border-radius: 2px;\n      top: ", "px;\n      left: ", "px;\n      height: ", "px;\n      width: ", "px;\n    }\n\t}\n\t"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  ", "\n  ", "}"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    background-color: #DDDDDD;\n    padding-top: ", "px;\n    padding-right: 10px;\n    padding-left: 10px;\n    box-sizing: border-box;\n    overflow: auto;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  ", "\n"]);

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

var deviceAnimation = (0, _styledComponents.keyframes)(_templateObject());
var spinnerAnimation = (0, _styledComponents.keyframes)(_templateObject2());

var DeviceContainer = _styledComponents.default.div(_templateObject3(), function (props) {
  return !props.isNaked && (0, _styledComponents.css)(_templateObject4(), _constants.FramePosTop);
});

var DeviceScaler = _styledComponents.default.div(_templateObject5(), function (props) {
  return props.isNaked && (0, _styledComponents.css)(_templateObject6());
}, function (props) {
  return !props.isNaked && (0, _styledComponents.css)(_templateObject7(), props.scale / 100, 1 / props.scale * 2000, 1 / props.scale * 2000, 1 / props.scale * 600, 1 / props.scale * 300, 1 / props.scale * 3000, 1 / props.scale * 1500, 1 / props.scale * 1200, 1 / props.scale * 300, 1 / props.scale * 3000, 1 / props.scale * 1500, 1 / props.scale * 2000, 1 / props.scale * 2000, 1 / props.scale * 600, 1 / props.scale * 300, 1 / props.scale * 3000, 1 / props.scale * 1500, 1 / props.scale * 1200, 1 / props.scale * 300, 1 / props.scale * 3000, 1 / props.scale * 1500, 1 / props.scale * 2000, 1 / props.scale * 2000, 1 / props.scale * 2000, 1 / props.scale * 2000, 1 / props.scale * 800, 1 / props.scale * 300, 1 / props.scale * 2000, 1 / props.scale * 1300, 1 / props.scale * 800, 1 / props.scale * 300, 1 / props.scale * 1200);
});

var DeviceWrapper = _styledComponents.default.div(_templateObject8(), function (props) {
  return props.isNaked && "\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n  ";
}, function (props) {
  return !props.isNaked && (0, _styledComponents.css)(_templateObject9(), deviceAnimation, props.resizable || !props.hasFrame ? '' : "\n  ".concat(props.orientation === 'portrait' || props.resizable === true ? "\n    padding-top: ".concat(_constants.FrameTop, "px;\n    padding-left: ").concat(_constants.FrameLeft, "px;\n    padding-right: ").concat(_constants.FrameRight, "px;\n    padding-bottom: ").concat(_constants.FrameBottom, "px;\n  ") : "\n    padding-top: ".concat(_constants.FrameRight, "px;\n    padding-left: ").concat(_constants.FrameTop, "px;\n    padding-right: ").concat(_constants.FrameBottom, "px;\n    padding-bottom: ").concat(_constants.FrameLeft, "px;\n  "), "\n  border-radius: 35px;\n  clear: both;\n  background: #333;\n  box-sizing: border-box;\n  &:before {\n    content: \"\";\n    border: 2px solid #bcbcbc;\n    position: absolute;\n    ").concat(props.orientation === 'portrait' || props.resizable === true ? "\n      bottom: 10px;\n      left: calc(50% - 20px);\n    " : "\n      right: 10px;\n      bottom: calc(50% - 20px);\n    ", "\n    width: 40px;\n    height: 40px;\n    border-radius: 20px;\n    box-sizing: border-box;\n  }\n  &:after {\n    content: \"\";\n    border: 3px solid #bcbcbc;\n    position: absolute;\n    ").concat(props.orientation === 'portrait' || props.resizable === true ? "\n      top: 25px;\n      left: calc(50% - 40px);\n      width: 80px;\n      height: 6px;\n    " : "\n      left: 25px;\n      top: calc(50% - 40px);\n      width: 6px;\n      height  80px;\n    ", "\n    border-radius: 5px;\n    box-sizing: border-box;\n  }\n  "));
});

var DeviceScreen = _styledComponents.default.iframe(_templateObject10(), function (props) {
  return !props.isNaked && "\n  border: 1px solid #CCC;\n  border-radius: 2px;\n  ";
}, function (props) {
  return props.isNaked && "\n  border: none;\n  ";
}, function (props) {
  return !props.isLoading ? 'visibility: visible;' : 'visibility: hidden;';
});

var LoadingScreen = _styledComponents.default.div(_templateObject11());

var Spinner = _styledComponents.default.div(_templateObject12(), spinnerAnimation);

var Device =
/*#__PURE__*/
function (_Component) {
  _inherits(Device, _Component);

  function Device(props) {
    var _this;

    _classCallCheck(this, Device);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Device).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "iframe", void 0);

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

      if (resizable && !this.props.isNaked) {
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
      if (this.props.isNaked) {
        return {
          width: '100%',
          height: '100%'
        };
      }

      if (!state.hasFrame) {
        if (state.orientation === 'portrait') {
          return {
            width: state.width + 2,
            height: state.height + 2
          };
        } else {
          return {
            width: state.height + 2,
            height: state.width + 2
          };
        }
      }

      var width = state.width + _constants.FrameLeft + _constants.FrameRight + 6;
      var height = state.height + _constants.FrameTop + _constants.FrameBottom + 6;

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

      if (iframe) {
        iframe.addEventListener("load", function () {
          if (iframe && iframe.contentDocument && iframe.contentDocument.body) {
            iframe.contentDocument.body.style.maxWidth = '100vw';
          }

          if (_this2.props.onIframeLoaded) {
            _this2.props.onIframeLoaded();
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          refreshTime = _this$props.refreshTime,
          isLoading = _this$props.isLoading,
          isNaked = _this$props.isNaked;
      return _react.default.createElement(_context.DeviceModeContext.Consumer, null, function (context) {
        return _react.default.createElement(DeviceContainer, {
          isNaked: isNaked
        }, _react.default.createElement(DeviceScaler, {
          scale: context.state.scale,
          isNaked: isNaked
        }, _react.default.createElement(_reResizable.Resizable, {
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
          orientation: context.state.orientation,
          hasFrame: context.state.hasFrame,
          isNaked: isNaked
        }, isLoading && _react.default.createElement(LoadingScreen, null, _react.default.createElement(Spinner, null)), _react.default.createElement(DeviceScreen, {
          isNaked: isNaked,
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