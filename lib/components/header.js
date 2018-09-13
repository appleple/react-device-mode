"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _context = require("../context");

var _styledComponents = _interopRequireDefault(require("styled-components"));

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

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 40px;\n  top: 8px;\n  border: none;\n  color: #333;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  margin-right: 5px;\n  margin-left: 5px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  margin-left: 10px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color : #e9e9e9;\n  padding: 5px 10px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n  padding: 4px 5px !important;\n  width: 50px;\n  color: #333;\n  line-height: 1;\n  vertical-align: middle;\n  background: #fbfbfb;\n  border: 1px solid rgba(0,0,0,.2);\n  border-radius: 3px;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.1);\n  transition: background-color .2s;\n  font-size: 13px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InputStyle = _styledComponents.default.input(_templateObject());

var HeaderStyle = _styledComponents.default.header(_templateObject2());

var HeaderInner = _styledComponents.default.div(_templateObject3());

var InputGroup = _styledComponents.default.div(_templateObject4());

var InputDevider = _styledComponents.default.div(_templateObject5());

var BtnStyle = _styledComponents.default.button(_templateObject6());

var DismissBtn = _styledComponents.default.button(_templateObject7());

var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(HeaderStyle, null, _react.default.createElement(_context.DeviceModeContext.Consumer, null, function (context) {
        return _react.default.createElement(_react.Fragment, null, _react.default.createElement(HeaderInner, {
          className: "acms-admin-form"
        }, _react.default.createElement("select", {
          onChange: function onChange(e) {
            context.actions.updateDevice(e.target.value);
          }
        }, context.state.devices.map(function (device) {
          return _react.default.createElement("option", {
            value: device.ua
          }, device.name);
        })), _react.default.createElement(InputGroup, null, _react.default.createElement(InputStyle, {
          type: "number",
          value: context.state.width,
          onInput: function onInput(e) {
            context.actions.updateWidth(parseInt(e.target.value));
          },
          disabled: context.state.resizable !== true
        }), _react.default.createElement(InputDevider, null, "\xD7"), _react.default.createElement(InputStyle, {
          type: "number",
          value: context.state.height,
          onInput: function onInput(e) {
            context.actions.updateHeight(parseInt(e.target.value));
          },
          disabled: context.state.resizable !== true
        })), _react.default.createElement(InputGroup, null, _react.default.createElement("select", {
          value: context.state.scale,
          onChange: function onChange(e) {
            context.actions.updateScale(parseInt(e.target.value));
          }
        }, _react.default.createElement("option", {
          value: "50"
        }, "50%"), _react.default.createElement("option", {
          value: "75"
        }, "75%"), _react.default.createElement("option", {
          value: "100"
        }, "100%"), _react.default.createElement("option", {
          value: "125"
        }, "125%"), _react.default.createElement("option", {
          value: "150"
        }, "150%"), _react.default.createElement("option", {
          value: "-1"
        }, context.state.i18n && context.state.i18n.fitWindow ? context.state.i18n.fitWindow : 'fitWindow'))), context.state.resizable === false && _react.default.createElement(InputGroup, null, _react.default.createElement(BtnStyle, {
          onClick: context.actions.switchOrientation,
          className: "acms-admin-btn"
        }, "Portrait"))), _react.default.createElement(DismissBtn, {
          onClick: context.actions.onClose
        }, "x"));
      }));
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;