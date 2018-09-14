"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _context = require("./context");

var _header = _interopRequireDefault(require("./components/header"));

var _device = _interopRequireDefault(require("./components/device"));

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height  100vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ViwerStyle = _styledComponents.default.div(_templateObject());

var ReactDeviceMode =
/*#__PURE__*/
function (_Component) {
  _inherits(ReactDeviceMode, _Component);

  function ReactDeviceMode(props) {
    var _this;

    _classCallCheck(this, ReactDeviceMode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactDeviceMode).call(this, props));
    _this.state = Object.assign({}, _context.DeviceMode, {
      devices: props.devices,
      src: props.src,
      i18n: Object.assign({}, _context.DeviceMode.i18n, props.i18n)
    });
    return _this;
  }

  _createClass(ReactDeviceMode, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var devices = this.state.devices;

      if (devices && devices.length) {
        var firstUA = devices[0].ua;
        this.updateDevice(firstUA);
      }
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      console.log(error, info);
    }
  }, {
    key: "updateDevice",
    value: function updateDevice(deviceUA) {
      var devices = this.state.devices;
      var device = devices.find(function (item) {
        if (item.ua === deviceUA) {
          return true;
        }

        return false;
      });
      (0, _util.setUserAgent)(window, deviceUA);
      this.setState(device);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          width = _this$state.width,
          height = _this$state.height;
      var _this$props = this.props,
          header = _this$props.header,
          refreshTime = _this$props.refreshTime,
          getUrl = _this$props.getUrl;
      return _react.default.createElement(_context.DeviceModeContext.Provider, {
        value: {
          state: this.state,
          actions: {
            updateWidth: function updateWidth(width) {
              return _this2.setState({
                width: width
              });
            },
            updateHeight: function updateHeight(height) {
              return _this2.setState({
                height: height
              });
            },
            updateSize: function updateSize(width, height) {
              return _this2.setState({
                width: width,
                height: height
              });
            },
            updateDevice: function updateDevice(deviceUA) {
              return _this2.updateDevice(deviceUA);
            },
            updateScale: function updateScale(scale) {
              return _this2.setState({
                scale: scale
              });
            },
            switchOrientation: function switchOrientation() {
              var orientation = _this2.state.orientation;

              if (orientation === 'portrait') {
                _this2.setState({
                  orientation: 'landscape'
                });
              } else {
                _this2.setState({
                  orientation: 'portrait'
                });
              }
            },
            onClose: function onClose() {
              if (_this2.props.onClose) {
                _this2.props.onClose();
              }
            }
          }
        }
      }, _react.default.createElement(ViwerStyle, null, _react.default.createElement(_header.default, {
        header: header
      }), _react.default.createElement(_device.default, {
        refreshTime: refreshTime,
        getUrl: getUrl
      })));
    }
  }]);

  return ReactDeviceMode;
}(_react.Component);

exports.default = ReactDeviceMode;