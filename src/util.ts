export const onIframeUrlChange = (iframe: HTMLIFrameElement, callback: Function): void => {
  const unloadHandler = () => {
    // Timeout needed because the URL changes immediately after
    // the `unload` event is dispatched.
    setTimeout(() => {
      try {
        iframe.contentWindow.removeEventListener("unload", unloadHandler);
        iframe.contentWindow.addEventListener("unload", unloadHandler);
        callback(iframe.contentDocument.location.href);
      } catch (e) {
        console.log(e);
      }
    }, 0);
  };
  iframe.contentWindow.removeEventListener("unload", unloadHandler);
  iframe.contentWindow.addEventListener("unload", unloadHandler);
};
