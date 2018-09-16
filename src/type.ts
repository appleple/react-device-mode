import { ReactNode } from 'react';

export interface I18n {
  fitWindow: string
}

export interface Device {
  devices: DeviceType[],
  src: string,
  i18n: I18n
}

interface getUrlFunc {
  (option: {
    url: string,
    ua: string,
    refreshTime: Date
  }): string;
}

export interface DeviceProps extends Device {
  onClose?(): void,
  header?: ReactNode,
  refreshTime?: Date,
  getUrl?: getUrlFunc
}

export interface DeviceModeState extends Device {
  width: number,
  height: number,
  ua: string,
  resizable: boolean,
  orientation: string
  scale: number,
}

export interface DeviceModeContextType {
  state: DeviceModeState,
  actions: {
    updateWidth(width: number): void,
    updateHeight(width: number): void,
    updateSize(width: number, height: number): void,
    updateDevice(deviceUA: string): void,
    updateScale(scale: number): number,
    switchOrientation(): void,
    onClose(): void
  }
}

export interface DeviceType {
  name: string,
  ua: string,
  width?: number,
  height?: number,
  resizable?: boolean
}
