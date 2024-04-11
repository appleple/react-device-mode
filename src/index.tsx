import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { DeviceModeContext, DeviceMode } from './context';
import Header from './components/header';
import Device from './components/device';
import { DeviceModeState, DeviceProps } from './type';
import { FrameLeft, FrameRight, FrameTop, FrameBottom, FramePosTop } from './constants';

const showAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const ViwerStyle = styled.div`
	height: 100%;
	width: 100%;
  animation ${showAnimation} .5s ease-out;
`

export default class ReactDeviceMode extends Component<DeviceProps, DeviceModeState> {

  static defaultProps = {
    hasCloseBtn: true,
    isLoading: false,
    hasHistoryDevice: true,
    HistoryDeviceKey: 'reactDeviceModeHistory'
  }

  ele: HTMLElement

  constructor(props: DeviceProps) {
    super(props);

    this.state = Object.assign({}, DeviceMode, {
      devices: props.devices,
      defaultDevice: props.defaultDevice,
      src: props.src,
      i18n: Object.assign({}, DeviceMode.i18n, props.i18n)
    });

    const historyDevice = this.getHistoryDevice();
    if(historyDevice !== typeof null) {
      this.state.defaultDevice = historyDevice
    }
  }

  componentDidMount() {
    const { devices, defaultDevice } = this.state;
    if (devices && devices.length) {
      const deviceName = defaultDevice || devices[0].name;
      this.updateDevice(deviceName);
    }
    window.addEventListener('resize', () => {
      this.adJustWindowSize();
    });
    this.adJustWindowSize();
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  adJustWindowSize() {
    const { width, resizable } = this.state;

    if(this.ele) return

    if (this.props.isNaked) {
      this.setState({
        width: this.ele.offsetWidth
      });
    } else if (resizable && width > this.ele.offsetWidth - 45) {
      this.setState({
        width: this.ele.offsetWidth - 45
      });
    }
  }

  updateDevice(deviceName: string) {
    const { devices } = this.state;
    const device = devices.find((item) => {
      if (item.name === deviceName) {
        this.setHistoryDevice(deviceName);
        return true;
      }
      return false;
    }) || devices[0];
    this.setState(device, () => {
      this.adJustWindowSize();
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

  onIframeLoaded() {
    if (this.props.onIframeLoaded) {
      this.props.onIframeLoaded();
    }
  }

  getIframe(iframe: HTMLIFrameElement) {
    if (this.props.getIframe) {
      this.props.getIframe(iframe);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.src && prevState.src !== nextProps.src) {
      return { src: nextProps.src }
    }
    return null;
  }

  getHistoryDevice(): string | null {
    const { hasHistoryDevice, HistoryDeviceKey } = this.props;
    if(hasHistoryDevice) {
      try {
        const historyDevice = localStorage.getItem(HistoryDeviceKey);
        return historyDevice || this.state.defaultDevice;
      }
      finally{}
    }
    return null
  }

  setHistoryDevice(device: string) {
    const { hasHistoryDevice, HistoryDeviceKey } = this.props;
    if(hasHistoryDevice) {
      try {
        localStorage.setItem(HistoryDeviceKey, device);
      }
      finally{}
    }
  }

  render() {
    const { width, height } = this.state;
    const { header, sub, refreshTime, getUrl, hasCloseBtn, isLoading, isNaked } = this.props;
    return (
      <DeviceModeContext.Provider value={{
        state: this.state,
        actions: {
          updateWidth: (width) => this.setState({ width }),
          updateHeight: (height) => this.setState({ height }),
          updateSize: (width, height) => this.setState({ width, height }),
          updateDevice: (deviceUA) => this.updateDevice(deviceUA),
          updateScale: (scale) => {
            if (scale === -1) {
              const wrapperHeight = this.ele.offsetHeight - FramePosTop;
              const frameHeight = this.state.hasFrame? height + FrameTop + FrameBottom : height + 20;
              const scaleHeightRatio = wrapperHeight / frameHeight * 100;
              const wrapperWidth = this.ele.offsetWidth;
              const frameWidth = this.state.hasFrame ? width + FrameRight + FrameLeft : width + 40;
              const scaleWidthRatio = wrapperWidth / frameWidth * 100;
              const scaleRatio = scaleHeightRatio < scaleWidthRatio ? scaleHeightRatio : scaleWidthRatio;
              this.setState({
                scale: scaleRatio
              });
            } else {
              this.setState({ scale })
            }
          },
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
      }}>
        <ViwerStyle ref={(ele) => { this.ele = ele }}>
          {!isNaked &&
            <Header header={header} sub={sub} hasCloseBtn={hasCloseBtn} />}
            <Device
              isNaked={isNaked}
              refreshTime={refreshTime}
              getUrl={getUrl}
              isLoading={isLoading}
              onUrlChange={this.onUrlChange.bind(this)}
              onIframeLoaded={this.onIframeLoaded.bind(this)}
              getIframe={(iframe) => { this.getIframe(iframe) }}
            />
        </ViwerStyle>
    </DeviceModeContext.Provider>)
  }
}
