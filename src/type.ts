export interface I18n {
  fitWindow: string
}

export interface DeviceProps {
  devices: DeviceType[],
  src: string,
  i18n: I18n
}

export interface DeviceModeState extends DeviceProps {
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
    updateWidth(width: number) : void,
    updateHeight(width: number) : void,
    updateSize(width: number, height: number) : void,
    updateDevice(deviceUA: string) : void,
    updateScale(scale: number) : number,
    switchOrientation() : void
  }
}

export interface DeviceType {
  name: string,
  ua: string,
  width?: number,
  height?: number,
  resizable?: boolean
}
