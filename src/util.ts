export const onIframeUrlChange = (iframe: HTMLIFrameElement, callback: Function): void => {
  window.addEventListener('message', (e) => {
    if (e.data.task === 'preview') {
      setTimeout(() => {
        try {
          setTimeout(() => {
            callback(e.data.url);
          }, 100);
        } catch (e) {}
      }, 0);
    }
  });
};
