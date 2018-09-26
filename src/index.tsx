import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { DeviceModeContext, DeviceMode } from './context';
import Header from './components/header';
import Device from './components/device';
import { DeviceModeState, DeviceProps } from './type';


const showAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const ViwerStyle = styled.div`
  height  100%;
  animation ${showAnimation} .5s ease-out;
`

export default class ReactDeviceMode extends Component<DeviceProps, DeviceModeState> {

  static defaultProps = {
    hasCloseBtn: true,
    isLoading: false
  }

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
      const deviceName = devices[0].name;
      this.updateDevice(deviceName);
    }
    window.addEventListener('resize', () => {
      const { width, resizable } = this.state;
      if (resizable && width > window.innerWidth - 45) {
        this.setState({
          width: window.innerWidth - 45
        });
      }
    });
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  updateDevice(deviceName: string) {
    const { devices } = this.state;
    const device = devices.find((item) => {
      if (item.name === deviceName) {
        return true;
      }
      return false;
    });
    this.setState(device, () => {
      if (this.props.onDeviceUpdated) {
        this.props.onDeviceUpdated(Object.assign({}, this.state));
      }
    });
  }

  onUrlChange(url) {
    if (this.props.onUrlChange) {
      this.props.onUrlChange(url, Object.assign({}, this.state));
    }
  }

  getIframe(iframe) {
    if (this.props.getIframe) {
      this.props.getIframe(iframe);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.src && prevState.src !== nextProps.src) {
      return { src: nextProps.src }
    }
  }

  render() {
    const { width, height } = this.state;
    const { header, sub, refreshTime, getUrl, hasCloseBtn, isLoading } = this.props;
    return (<DeviceModeContext.Provider value={{
      state: this.state,
      actions: {
        updateWidth: (width) => this.setState({ width }),
        updateHeight: (height) => this.setState({ height }),
        updateSize: (width, height) => this.setState({ width, height }),
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
        <Header header={header} sub={sub} hasCloseBtn={hasCloseBtn}/>
        <Device 
          refreshTime={refreshTime} 
          getUrl={getUrl}
          isLoading={isLoading}
          onUrlChange={this.onUrlChange.bind(this)} 
          getIframe={(iframe) => { this.getIframe(iframe) }}
        />
      </ViwerStyle>
    </DeviceModeContext.Provider>)
  }
}
