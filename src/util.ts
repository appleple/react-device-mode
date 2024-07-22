export const onIframeUrlChange = (callback: (url: string) => void): void => {
  window.addEventListener('message', (e) => {
    if (e.data.task === 'preview') {
      setTimeout(() => {
        setTimeout(() => {
          callback(e.data.url);
        }, 100);
      }, 0);
    }
  });
};

export const getVisibleSize = (element: HTMLElement): { width: number; height: number } => {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  // 要素の上部が表示されている範囲
  const visibleTop = Math.max(0, rect.top);
  // 要素の下部が表示されている範囲
  const visibleBottom = Math.min(windowHeight, rect.bottom);
  // 要素の左側が表示されている範囲
  const visibleLeft = Math.max(0, rect.left);
  // 要素の右側が表示されている範囲
  const visibleRight = Math.min(windowWidth, rect.right);

  // 表示されている高さと横幅を計算
  const visibleHeight = Math.max(0, visibleBottom - visibleTop);
  const visibleWidth = Math.max(0, visibleRight - visibleLeft);

  return { width: visibleWidth, height: visibleHeight };
};
