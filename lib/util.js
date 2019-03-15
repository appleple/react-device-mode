"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onIframeUrlChange = void 0;

var onIframeUrlChange = function onIframeUrlChange(iframe, callback) {
  window.addEventListener('message', function (e) {
    if (e.data.task === 'preview') {
      setTimeout(function () {
        try {
          setTimeout(function () {
            callback(e.data.url);
          }, 100);
        } catch (e) {}
      }, 0);
    }
  });
};

exports.onIframeUrlChange = onIframeUrlChange;