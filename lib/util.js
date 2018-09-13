"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUserAgent = void 0;

var setUserAgent = function setUserAgent(window, userAgent) {
  // Works on Firefox, Chrome, Opera and IE9+
  if (navigator.__defineGetter__) {
    navigator.__defineGetter__('userAgent', function () {
      return userAgent;
    });
  } else if (Object.defineProperty) {
    Object.defineProperty(navigator, 'userAgent', {
      get: function get() {
        return userAgent;
      }
    });
  } // Works on Safari


  if (window.navigator.userAgent !== userAgent) {
    var userAgentProp = {
      get: function get() {
        return userAgent;
      }
    };

    try {
      Object.defineProperty(window.navigator, 'userAgent', userAgentProp);
    } catch (e) {
      window.navigator = Object.create(navigator, {
        userAgent: userAgentProp
      });
    }
  }
};

exports.setUserAgent = setUserAgent;