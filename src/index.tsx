import React, { Component } from 'react';
import styled from 'styled-components';
import { DeviceModeContext, DeviceMode } from './context';
import Header from './components/header';
import Device from './components/device';
import { setUserAgent } from './util';
import { DeviceModeState, DeviceProps } from './type';

const ViwerStyle = styled.div`
  height  100vh;
`

export default class ReactDeviceMode extends Component<DeviceProps, DeviceModeState> {

  constructor(props: DeviceProps) {
    super(props);
    this.state = Object.assign({}, DeviceMode, {
      devices: props.devices,
      src: props.src,
      i18n: Object.assign({}, DeviceMode.i18n, props.i18n)
    });
  }

  componentDidMount() {
    const { devices } = this.state;
    if (devices && devices.length) {
      const firstUA = devices[0].ua;
      this.updateDevice(firstUA);
    }
  }

  componentDidCatch(error, info) {
	console.log(error, info);
  }

  updateDevice(deviceUA: string) {
    const { devices } = this.state;
    const device = devices.find((item) => {
      if (item.ua === deviceUA) {
        return true;
      }
      return false;
    });
    setUserAgent(window, deviceUA);
    this.setState(device);
  }

  render () {
    const {width, height} = this.state;
    return (<DeviceModeContext.Provider value={{
      state: this.state,
      actions: {
        updateWidth: (width) => this.setState({ width }),
        updateHeight: (height) => this.setState({ height }),
        updateSize: (width, height) => this.setState({width, height}),
        updateDevice: (deviceUA) => this.updateDevice(deviceUA),
        updateScale: (scale) => this.setState({ scale }),
        switchOrientation: () => {
          const { orientation } = this.state;
          if (orientation === 'portrait') {
            this.setState({
              orientation: 'landscape'
            });
          } else {
            this.setState({
              orientation: 'portrait'
            });
          }
		},
		onClose: () => {
		  if (this.props.onClose) {
		    this.props.onClose();
		  }
		}
      }
    }} >
      <ViwerStyle>
        <Header />
        <Device />
      </ViwerStyle>
    </DeviceModeContext.Provider>)
  }
}
