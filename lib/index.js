"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _context = require("./context");

var _header = _interopRequireDefault(require("./components/header"));

var _device = _interopRequireDefault(require("./components/device"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\theight: 100%;\n\twidth: 100%;\n  animation ", " .5s ease-out;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var showAnimation = (0, _styledComponents.keyframes)(_templateObject());

var ViwerStyle = _styledComponents.default.div(_templateObject2(), showAnimation);

var ReactDeviceMode =
/*#__PURE__*/
function (_Component) {
  _inherits(ReactDeviceMode, _Component);

  function ReactDeviceMode(props) {
    var _this;

    _classCallCheck(this, ReactDeviceMode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactDeviceMode).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "ele", void 0);

    _this.state = Object.assign({}, _context.DeviceMode, {
      devices: props.devices,
      defaultDevice: props.defaultDevice,
      src: props.src,
      i18n: Object.assign({}, _context.DeviceMode.i18n, props.i18n)
    });

    var historyDevice = _this.getHistoryDevice();

    if (historyDevice) {
      _this.state.defaultDevice = historyDevice;
    }

    return _this;
  }

  _createClass(ReactDeviceMode, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$state = this.state,
          devices = _this$state.devices,
          defaultDevice = _this$state.defaultDevice;

      if (devices && devices.length) {
        var deviceName = defaultDevice || devices[0].name;
        this.updateDevice(deviceName);
      }

      window.addEventListener('resize', function () {
        _this2.adJustWindowSize();
      });
      this.adJustWindowSize();
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      console.log(error, info);
    }
  }, {
    key: "adJustWindowSize",
    value: function adJustWindowSize() {
      var _this$state2 = this.state,
          width = _this$state2.width,
          resizable = _this$state2.resizable;
      if (this.ele) return;

      if (this.props.isNaked) {
        this.setState({
          width: this.ele.offsetWidth
        });
      } else if (resizable && width > this.ele.offsetWidth - 45) {
        this.setState({
          width: this.ele.offsetWidth - 45
        });
      }
    }
  }, {
    key: "updateDevice",
    value: function updateDevice(deviceName) {
      var _this3 = this;

      var devices = this.state.devices;
      var device = devices.find(function (item) {
        if (item.name === deviceName) {
          _this3.setHistoryDevice(deviceName);

          return true;
        }

        return false;
      }) || devices[0];
      this.setState(device, function () {
        _this3.adJustWindowSize();

        if (_this3.props.onDeviceUpdated) {
          _this3.props.onDeviceUpdated(Object.assign({}, _this3.state));
        }
      });
    }
  }, {
    key: "onUrlChange",
    value: function onUrlChange(url) {
      if (this.props.onUrlChange) {
        this.props.onUrlChange(url, Object.assign({}, this.state));
      }
    }
  }, {
    key: "onIframeLoaded",
    value: function onIframeLoaded() {
      if (this.props.onIframeLoaded) {
        this.props.onIframeLoaded();
      }
    }
  }, {
    key: "getIframe",
    value: function getIframe(iframe) {
      if (this.props.getIframe) {
        this.props.getIframe(iframe);
      }
    }
  }, {
    key: "getHistoryDevice",
    value: function getHistoryDevice() {
      var _this$props = this.props,
          hasHistoryDevice = _this$props.hasHistoryDevice,
          historyDeviceKey = _this$props.historyDeviceKey;

      if (hasHistoryDevice) {
        try {
          var historyDevice = localStorage.getItem(historyDeviceKey);
          return historyDevice || this.state.defaultDevice;
        } catch (_unused) {
          return null;
        }
      }

      return null;
    }
  }, {
    key: "setHistoryDevice",
    value: function setHistoryDevice(device) {
      var _this$props2 = this.props,
          hasHistoryDevice = _this$props2.hasHistoryDevice,
          historyDeviceKey = _this$props2.historyDeviceKey;

      if (hasHistoryDevice) {
        try {
          localStorage.setItem(historyDeviceKey, device);
        } catch (_unused2) {
          return null;
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state3 = this.state,
          width = _this$state3.width,
          height = _this$state3.height;
      var _this$props3 = this.props,
          header = _this$props3.header,
          sub = _this$props3.sub,
          refreshTime = _this$props3.refreshTime,
          getUrl = _this$props3.getUrl,
          hasCloseBtn = _this$props3.hasCloseBtn,
          isLoading = _this$props3.isLoading,
          isNaked = _this$props3.isNaked;
      return _react.default.createElement(_context.DeviceModeContext.Provider, {
        value: {
          state: this.state,
          actions: {
            updateWidth: function updateWidth(width) {
              return _this4.setState({
                width: width
              });
            },
            updateHeight: function updateHeight(height) {
              return _this4.setState({
                height: height
              });
            },
            updateSize: function updateSize(width, height) {
              return _this4.setState({
                width: width,
                height: height
              });
            },
            updateDevice: function updateDevice(deviceUA) {
              return _this4.updateDevice(deviceUA);
            },
            updateScale: function updateScale(scale) {
              if (scale === -1) {
                var wrapperHeight = _this4.ele.offsetHeight - _constants.FramePosTop;
                var frameHeight = _this4.state.hasFrame ? height + _constants.FrameTop + _constants.FrameBottom : height + 20;
                var scaleHeightRatio = wrapperHeight / frameHeight * 100;
                var wrapperWidth = _this4.ele.offsetWidth;
                var frameWidth = _this4.state.hasFrame ? width + _constants.FrameRight + _constants.FrameLeft : width + 40;
                var scaleWidthRatio = wrapperWidth / frameWidth * 100;
                var scaleRatio = scaleHeightRatio < scaleWidthRatio ? scaleHeightRatio : scaleWidthRatio;

                _this4.setState({
                  scale: scaleRatio
                });
              } else {
                _this4.setState({
                  scale: scale
                });
              }
            },
            switchOrientation: function switchOrientation() {
              var orientation = _this4.state.orientation;

              if (orientation === 'portrait') {
                _this4.setState({
                  orientation: 'landscape'
                });
              } else {
                _this4.setState({
                  orientation: 'portrait'
                });
              }
            },
            onClose: function onClose() {
              if (_this4.props.onClose) {
                _this4.props.onClose();
              }
            }
          }
        }
      }, _react.default.createElement(ViwerStyle, {
        ref: function ref(ele) {
          _this4.ele = ele;
        }
      }, !isNaked && _react.default.createElement(_header.default, {
        header: header,
        sub: sub,
        hasCloseBtn: hasCloseBtn
      }), _react.default.createElement(_device.default, {
        isNaked: isNaked,
        refreshTime: refreshTime,
        getUrl: getUrl,
        isLoading: isLoading,
        onUrlChange: this.onUrlChange.bind(this),
        onIframeLoaded: this.onIframeLoaded.bind(this),
        getIframe: function getIframe(iframe) {
          _this4.getIframe(iframe);
        }
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.src && prevState.src !== nextProps.src) {
        return {
          src: nextProps.src
        };
      }

      return null;
    }
  }]);

  return ReactDeviceMode;
}(_react.Component);

exports.default = ReactDeviceMode;

_defineProperty(ReactDeviceMode, "defaultProps", {
  hasCloseBtn: true,
  isLoading: false,
  hasHistoryDevice: true,
  historyDeviceKey: 'reactDeviceModeHistory'
});