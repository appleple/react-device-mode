import React, { Component } from 'react';
import styled from 'styled-components';
import { DeviceModeContext, DeviceMode } from './context';
import Header from './components/header';
import Device from './components/device';
import { setUserAgent } from './util';

const ViwerStyle = styled.div`
  height  100vh;
`

export default class ReactDeviceMode extends Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({}, DeviceMode, {
      devices: props.devices,
      src: props.src
    });
  }

  componentDidMount() {
    const { devices } = this.state;
    if (devices && devices.length) {
      const firstUA = devices[0].ua;
      this.updateDevice(firstUA);
    }
  }

  updateDevice(deviceUA) {
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
        updateWidth: (width) => this.setState({width: parseInt(width)}),
        updateHeight: (height) => this.setState({height: parseInt(height)}),
        updateSize: (width, height) => this.setState({width: parseInt(width), height: parseInt(height)}),
        updateDevice: (deviceUA) => this.updateDevice(deviceUA),
        updateScale: (scale) => this.setState({scale: parseInt(scale)}),
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