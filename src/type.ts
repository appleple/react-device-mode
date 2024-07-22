import { DeviceModeContextType } from './stores/context';

export interface I18n {
  fitWindow: string;
}

export interface DeviceType {
  name: string;
  ua: string;
  width: number;
  height: number;
  resizable: boolean;
  hasFrame: boolean;
}

export interface DeviceChangeEvent extends Pick<DeviceModeContextType['state'], 'orientation' | 'scale' | 'src'> {
  device: DeviceType;
}
