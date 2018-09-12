export const setUserAgent = (window, userAgent) => {
  // Works on Firefox, Chrome, Opera and IE9+
  if (navigator.__defineGetter__) {
    navigator.__defineGetter__('userAgent', () => userAgent);
  } else if (Object.defineProperty) {
    Object.defineProperty(navigator, 'userAgent', {
      get: () => userAgent
    });
  }
  // Works on Safari
  if (window.navigator.userAgent !== userAgent) {
    const userAgentProp = {
      get: () => userAgent
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
