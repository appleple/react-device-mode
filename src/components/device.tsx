import React, { Component, Fragment } from 'react';
import Resizable from 're-resizable';
import styled, { keyframes } from 'styled-components';
import { DeviceModeContext } from '../context';
import { onIframeUrlChange} from '../util';
import { DeviceModeContextType, DeviceComponentProps } from '../type';

const FrameLeft = 18;
const FrameRight = 18;
const FrameTop = 60;
const FrameBottom = 70;

const deviceAnimation = keyframes`
  from {
    transform: translateY(-30px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const DeviceContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #DDDDDD;
  height: 100%;
  padding-top: ${FrameTop + 20}px;
  box-sizing: border-box;
  overflow: auto;
`;

const DeviceWrapper = styled.div`
  margin: 0 auto;
  border: 2px solid #bcbcbc;
  width: 100%;
  height: 100%;
  position: relative;
  animation ${deviceAnimation} .5s ease-out;
  transform: scale(${(props) => {
    if (props.scale === -1) {
      return (window.innerHeight - 235) / props.height
    } else {
      return props.scale / 100
    }
  }});
  transform-origin: top center;
  ${props => props.resizable ? '' : `
  ${props.orientation === 'portrait' || props.resizable === true ? `
    padding-top: ${FrameTop}px;
    padding-left: ${FrameLeft}px;
    padding-right: ${FrameRight}px;
    padding-bottom: ${FrameBottom}px;
  ` : `
    padding-top: ${FrameRight}px;
    padding-left: ${FrameTop}px;
    padding-right: ${FrameBottom}px;
    padding-bottom: ${FrameLeft}px;
  `
    }
  border-radius: 35px;
  clear: both;
  background: #333;
  box-sizing: border-box;
  &:before {
    content: "";
    border: 2px solid #bcbcbc;
    position: absolute;
    ${props.orientation === 'portrait' || props.resizable === true ? `
      bottom: 10px;
      left: calc(50% - 20px);
    ` : `
      right: 10px;
      bottom: calc(50% - 20px);
    `}
    width: 40px;
    height: 40px;
    border-radius: 20px;
    box-sizing: border-box;
  }
  &:after {
    content: "";
    border: 3px solid #bcbcbc;
    position: absolute;
    ${props.orientation === 'portrait' || props.resizable === true ? `
      top: 25px;
      left: calc(50% - 40px);
      width: 80px;
      height: 6px;
    ` : `
      left: 25px;
      top: calc(50% - 40px);
      width: 6px;
      height  80px;
    `}
    border-radius: 5px;
    box-sizing: border-box;
  }
  `}
`;

const DeviceScreen = styled.iframe`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid #CCC;
  border-radius: 2px;
`;

export default class Device extends Component<DeviceComponentProps, { refreshTime: Date }> {

  iframe: HTMLElement;

  constructor(props) {
    super(props);
    this.state = {
      refreshTime: props.refreshTime || new Date()
    };
  }

  static defaultProps = {
    getUrl: ({ url, refreshTime, ua }) => url
  }

  getRisizeConf(resizable) {
    const resizeConf = {
      top: false,
      right: false,
      bottom: false,
      left: false,
      topRight: false,
      bottomRight: false,
      bottomLeft: false,
      topLeft: false
    }

    if (resizable) {
      return Object.assign({}, resizeConf, { right: true, bottom: true });
    }
    return resizeConf;
  }

  getSize(state) {
    if (state.resizable) {
      return { width: state.width + 2, height: state.height + 2};
    }
    const width = state.width + FrameLeft + FrameRight + 6;
    const height = state.height + FrameTop + FrameBottom + 6;
    if (state.orientation === 'portrait') {
      return { width, height }
    }
    return { width: height, height: width }
  }

  componentDidMount() {
    const { iframe } = this;
    onIframeUrlChange(iframe, (url) => {
      if (this.props.onUrlChange) {
        this.props.onUrlChange(url);
      }
    });
    if (this.props.getIframe) {
      this.props.getIframe(iframe);
    }
  }

  render() {

    const { refreshTime } = this.props;

    return (<DeviceModeContext.Consumer>
      {(context: DeviceModeContextType) => (
        <DeviceContainer>
          <Resizable enable={this.getRisizeConf(context.state.resizable)} size={this.getSize(context.state)} onResizeStop={
            (e, direction, ref, d) => {
              context.actions.updateSize(context.state.width + d.width, context.state.height + d.height)
            }
          }>
            <DeviceWrapper resizable={context.state.resizable} scale={context.state.scale} height={context.state.height} orientation={context.state.orientation}>
              <DeviceScreen src={this.props.getUrl({
                url: context.state.src,
                refreshTime: refreshTime,
                ua: context.state.ua
              })} innerRef={(iframe: HTMLIframeElement) => {
                this.iframe = iframe;
              }} />
            </DeviceWrapper>
          </Resizable>
        </DeviceContainer>
      )}
    </DeviceModeContext.Consumer>);
  }
}
