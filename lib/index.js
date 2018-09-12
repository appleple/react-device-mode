'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  height  100vh;\n'], ['\n  height  100vh;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _context = require('./context');

var _header = require('./components/header');

var _header2 = _interopRequireDefault(_header);

var _device = require('./components/device');

var _device2 = _interopRequireDefault(_device);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ViwerStyle = _styledComponents2.default.div(_templateObject);

var ReactDeviceMode = function (_Component) {
  _inherits(ReactDeviceMode, _Component);

  function ReactDeviceMode(props) {
    _classCallCheck(this, ReactDeviceMode);

    var _this = _possibleConstructorReturn(this, (ReactDeviceMode.__proto__ || Object.getPrototypeOf(ReactDeviceMode)).call(this, props));

    _this.state = Object.assign({}, _context.DeviceMode, {
      devices: props.devices,
      src: props.src,
      i18n: Object.assign({}, _context.DeviceMode.i18n, props.i18n)
    });
    return _this;
  }

  _createClass(ReactDeviceMode, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var devices = this.state.devices;

      if (devices && devices.length) {
        var firstUA = devices[0].ua;
        this.updateDevice(firstUA);
      }
    }
  }, {
    key: 'updateDevice',
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
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          width = _state.width,
          height = _state.height;

      return _react2.default.createElement(
        _context.DeviceModeContext.Provider,
        { value: {
            state: this.state,
            actions: {
              updateWidth: function updateWidth(width) {
                return _this2.setState({ width: parseInt(width) });
              },
              updateHeight: function updateHeight(height) {
                return _this2.setState({ height: parseInt(height) });
              },
              updateSize: function updateSize(width, height) {
                return _this2.setState({ width: parseInt(width), height: parseInt(height) });
              },
              updateDevice: function updateDevice(deviceUA) {
                return _this2.updateDevice(deviceUA);
              },
              updateScale: function updateScale(scale) {
                return _this2.setState({ scale: parseInt(scale) });
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
              }
            }
          } },
        _react2.default.createElement(
          ViwerStyle,
          null,
          _react2.default.createElement(_header2.default, null),
          _react2.default.createElement(_device2.default, null)
        )
      );
    }
  }]);

  return ReactDeviceMode;
}(_react.Component);

exports.default = ReactDeviceMode;