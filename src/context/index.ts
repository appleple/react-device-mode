import React from 'react';

export const DeviceMode = {
  width: 375,
  height: 667,
  ratio: 1,
  orientation: 'portrait',
  ua: '',
  src: '',
  resizable: false,
  scale: 100,
  i18n: {
    fitWindow: 'fitWindow'
  }
};

export const DeviceModeContext = React.createContext(DeviceMode);
