"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onIframeUrlChange = void 0;

var onIframeUrlChange = function onIframeUrlChange(iframe, callback) {
  var unloadHandler = function unloadHandler() {
    // Timeout needed because the URL changes immediately after
    // the `unload` event is dispatched.
    setTimeout(function () {
      try {
        console.log('unload');
        console.log(iframe.contentWindow);
        iframe.contentWindow.removeEventListener("unload", unloadHandler);
        iframe.contentWindow.addEventListener("unload", unloadHandler);
        setTimeout(function () {
          callback(iframe.contentDocument.location.href);
        }, 100);
      } catch (e) {
        console.log(e);
      }
    }, 0);
  };

  iframe.contentWindow.removeEventListener("unload", unloadHandler);
  iframe.contentWindow.addEventListener("unload", unloadHandler);
};

exports.onIframeUrlChange = onIframeUrlChange;