export const onIframeUrlChange = (iframe: HTMLIFrameElement, callback: Function): void => {
  const unloadHandler = () => {
    // Timeout needed because the URL changes immediately after
    // the `unload` event is dispatched.
    setTimeout(() => {
      callback(iframe.contentWindow.location.href);
    }, 0);
  };

  const attachUnload = () => {
      // Remove the unloadHandler in case it was already attached.
      // Otherwise, the change will be dispatched twice.
      iframe.contentWindow.removeEventListener("unload", unloadHandler);
      iframe.contentWindow.addEventListener("unload", unloadHandler);
  }

  iframe.addEventListener("load", attachUnload);
  attachUnload();
}