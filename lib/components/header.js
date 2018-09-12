'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  font-size: 16px;\n  padding: 14px 5px 10px;\n  color: #333;\n  line-height: 1;\n  vertical-align: middle;\n  background: #fbfbfb;\n  border: 1px solid rgba(0,0,0,.2);\n  border-radius: 3px;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.1);\n  transition: background-color .2s;\n  font-size: 13px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n'], ['\n  font-size: 16px;\n  padding: 14px 5px 10px;\n  color: #333;\n  line-height: 1;\n  vertical-align: middle;\n  background: #fbfbfb;\n  border: 1px solid rgba(0,0,0,.2);\n  border-radius: 3px;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.1);\n  transition: background-color .2s;\n  font-size: 13px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background-color : #e9e9e9;\n  padding: 5px 10px;\n'], ['\n  background-color : #e9e9e9;\n  padding: 5px 10px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  max-width: 400px;\n  margin: 0 auto;\n'], ['\n  max-width: 400px;\n  margin: 0 auto;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _context = require('../context');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InputStyle = _styledComponents2.default.input(_templateObject);

var HeaderStyle = _styledComponents2.default.header(_templateObject2);

var HeaderInner = _styledComponents2.default.div(_templateObject3);

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        HeaderStyle,
        null,
        _react2.default.createElement(
          _context.DeviceModeContext.Consumer,
          null,
          function (context) {
            return _react2.default.createElement(
              _react.Fragment,
              null,
              _react2.default.createElement(
                HeaderInner,
                null,
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'select',
                    { onChange: function onChange(e) {
                        context.actions.updateDevice(e.target.value);
                      } },
                    context.state.devices.map(function (device) {
                      return _react2.default.createElement(
                        'option',
                        { value: device.ua },
                        device.name
                      );
                    })
                  )
                ),
                _react2.default.createElement(InputStyle, { type: 'text', value: context.state.width, onInput: function onInput(e) {
                    context.actions.updateWidth(e.target.value);
                  } }),
                '\xD7',
                _react2.default.createElement(InputStyle, { type: 'text', value: context.state.height, onInput: function onInput(e) {
                    context.actions.updateHeight(e.target.value);
                  } })
              )
            );
          }
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;