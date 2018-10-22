import React from 'react';
import { DeviceModeState } from '../type';

export const DeviceMode: DeviceModeState = {
  devices: [],
  defaultDevice: '',
  width: 375,
  height: 667,
  orientation: 'portrait',
  ua: '',
  src: '',
  resizable: false,
  hasFrame: false,
  scale: 100,
  i18n: {
    fitWindow: 'fitWindow'
  }
};

export const DeviceModeContext = React.createContext(DeviceMode);
