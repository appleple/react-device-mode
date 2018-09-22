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

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  background:url('data:image/svg+xml;base64,PHN2ZyBpZD0i44Os44Kk44Ok44O8XzEiIGRhdGEtbmFtZT0i44Os44Kk44Ok44O8IDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgNDAgNDAiPjx0aXRsZT7jgqLjg7zjg4jjg5zjg7zjg4kgMSDjga7jgrPjg5Tjg7wgMzwvdGl0bGU+PHBhdGggZD0iTTM0LjY4LDI3LjM4LDIxLjc0LDIuNTNhMS44OCwxLjg4LDAsMCwwLTIuNTMtLjc5TDYuMDYsOC41OWExLjg2LDEuODYsMCwwLDAtLjc5LDIuNTJMMTguMiwzNmExLjg3LDEuODcsMCwwLDAsMi41My44TDMzLjg4LDI5LjlBMS44NywxLjg3LDAsMCwwLDM0LjY4LDI3LjM4Wk0xOC40MiwzMi4yMiw3LjgyLDExLjg2bDEzLjA3LTYuOCwxMC42LDIwLjM1WiIvPjxwb2x5bGluZSBwb2ludHM9IjI2LjY2IDguMjIgMjUuMjUgNC4wMyAyOS40NCAyLjYxIiBmaWxsPSJub25lIiBzdHJva2U9IiMyMzE4MTUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwb2x5bGluZSBwb2ludHM9IjEzLjkgMzIuMTMgMTUuMjggMzYuMzQgMTEuMDcgMzcuNzIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIzMTgxNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTI1LjM5LDQuMjJjLjUzLjE4LDEuMDUuMzksMS41Ni42MmExNi43NSwxNi43NSwwLDAsMSw5Ljc3LDE1LjIzYzAsLjU1LDAsMS4xLS4wOCwxLjY0YTE2LjksMTYuOSwwLDAsMS0uNTgsMyIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zLjIzLDIwLjA3cTAtLjc1LjA2LTEuNDdhMTcuMSwxNy4xLDAsMCwxLC41NC0zTC0uNzIsMTgsMTAuMDksMzguNDcsMTQuOCwzNkExNi43NCwxNi43NCwwLDAsMSwzLjIzLDIwLjA3WiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zLjgzLDE1LjYzYTE3LjEsMTcuMSwwLDAsMC0uNTQsM3EtLjA2LjcyLS4wNiwxLjQ3QTE2Ljc0LDE2Ljc0LDAsMCwwLDE0LjgsMzYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIzMTgxNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz48cGF0aCBkPSJNMzYuMDYsMjQuNzRhMTYuOSwxNi45LDAsMCwwLC41OC0zYzAtLjU0LjA4LTEuMDkuMDgtMS42NEExNi43NSwxNi43NSwwLDAsMCwyNyw0Ljg0Yy0uNTEtLjIzLTEtLjQ0LTEuNTYtLjYyIiBmaWxsPSJub25lIiBzdHJva2U9IiMyMzE4MTUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PC9zdmc+');\n  background-size: cover;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  color: #333;\n  width: 18px;\n  height: 2px;\n  position: relative;\n  &:before,\n  &:after {\n    position: absolute;\n    display: block;\n    width: 100%;\n    height: 2px;\n    content: '';\n    transition: .3s all;\n    border-radius: 1px;\n    background-color: #333;\n    width 22px;\n  }\n  &:before {\n    transform: translate(-2px, 6px) rotate(45deg);\n    top: -6px;\n  }\n  &:after {\n    transform: translate(-2px, -6px) rotate(-45deg);\n    bottom: -6px;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  background: transparent;\n  border: none;\n  display: block;\n  right: 40px;\n  top: 10px;\n  width: 18px;\n  height: 18px;\n  padding: 0;\n"]);

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
  var data = _taggedTemplateLiteral(["\n  background-color : #e9e9e9;\n  padding: 5px 10px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n  width: 80px;\n  color: #333;\n  line-height: 1;\n  vertical-align: middle;\n  background: #fbfbfb;\n  border: 1px solid rgba(0,0,0,.2);\n  border-radius: 3px;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.1);\n  transition: background-color .2s;\n  font-size: 13px;\n"]);

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

var DismissBtnLine = _styledComponents.default.span(_templateObject8());

var RotateIcon = _styledComponents.default.span(_templateObject9());

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
      var _this = this;

      var hasCloseBtn = this.props.hasCloseBtn;
      return _react.default.createElement(HeaderStyle, null, _react.default.createElement(_context.DeviceModeContext.Consumer, null, function (context) {
        return _react.default.createElement(_react.Fragment, null, _react.default.createElement(HeaderInner, {
          className: "acms-admin-form"
        }, _this.props.header, _react.default.createElement("select", {
          onChange: function onChange(e) {
            context.actions.updateDevice(e.target.value);
          }
        }, context.state.devices.map(function (device) {
          return _react.default.createElement("option", {
            value: device.name
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
          className: "acms-admin-btn",
          style: {
            padding: '5px 10px'
          }
        }, _react.default.createElement(RotateIcon, null)))), hasCloseBtn && _react.default.createElement(DismissBtn, {
          onClick: context.actions.onClose
        }, _react.default.createElement(DismissBtnLine, null)));
      }));
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;