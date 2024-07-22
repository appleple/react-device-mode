import { createContext } from 'react';
import { DeviceType, I18n } from '../type';

interface DeviceModeState {
  devices: DeviceType[];
  device: DeviceType;
  src: string;
  i18n: I18n;
  orientation: string;
  scale: number;
  isNaked: boolean;
}

interface DeviceModeActions {
  updateWidth(width: number): void;
  updateHeight(width: number): void;
  updateSize(width: number, height: number): void;
  updateDevice(deviceUA: string): void;
  updateScale(scale: number): void;
  switchOrientation(): void;
  onClose(): void;
}

export interface DeviceModeContextType {
  state: DeviceModeState;
  actions: DeviceModeActions;
  frameRef: React.RefObject<HTMLDivElement | null>;
  setFrameRef: (node: HTMLDivElement | null) => void;
}

const DeviceModeContext = createContext<DeviceModeContextType>({
  state: {
    devices: [],
    device: {
      name: '',
      ua: '',
      width: 375,
      height: 667,
      resizable: false,
      hasFrame: false,
    },
    orientation: 'portrait',
    src: '',
    scale: 100,
    isNaked: false,
    i18n: {
      fitWindow: 'fitWindow',
    },
  },
  actions: {
    updateWidth: () => {},
    updateHeight: () => {},
    updateSize: () => {},
    updateDevice: () => {},
    updateScale: () => {},
    switchOrientation: () => {},
    onClose: () => {},
  },
  frameRef: { current: null },
  setFrameRef: () => {},
});

export default DeviceModeContext;
