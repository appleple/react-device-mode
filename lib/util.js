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
        callback(iframe.contentDocument.location.href);
      } catch (e) {
        console.log(e);
      }
    }, 0);
  };

  var attachUnload = function attachUnload() {
    // Remove the unloadHandler in case it was already attached.
    // Otherwise, the change will be dispatched twice.
    iframe.contentWindow.removeEventListener("unload", unloadHandler);
    iframe.contentWindow.addEventListener("unload", unloadHandler);
  };

  iframe.addEventListener("load", attachUnload);
  attachUnload();
};

exports.onIframeUrlChange = onIframeUrlChange;