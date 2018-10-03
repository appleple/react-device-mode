import React, { Component, Fragment } from 'react';
import Resizable from 're-resizable';
import styled, { keyframes } from 'styled-components';
import { DeviceModeContext } from '../context';
import { onIframeUrlChange } from '../util';
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

const spinnerAnimation = keyframes`
  0% {
    opacity: .4;
    transform: rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: rotate(180deg);
  }
  100% {
    opacity: .4;
    transform: rotate(360deg);
  }
`

const DeviceContainer = styled.div`
  width: 100%;
  height: 100%;
  ${props => !props.isNaked && `
    display: flex;
    justify-content: center;
    background-color: #DDDDDD;
    padding-top: ${FrameTop + 20}px;
    padding-right: 10px;
    padding-left: 10px;
    box-sizing: border-box;
    overflow: auto;
    `
  }
`;

const DeviceScaler = styled.div`
  height: 100%;
  margin: 0 auto;
  ${props => props.isNaked && `
    width: 100%;
  `}
  ${props => !props.isNaked && `
  transform: scale(${(() => {
      if (props.scale === -1) {
        return (window.innerHeight - 235) / props.height
      } else {
        return props.scale / 100
      }
    })()});
  transform-origin: top center;
  .handle-right {
    position: relative;
    background: #bbb;
    transition: background .3s;
    right: -${1 / props.scale * 2000}px !important;
    width: ${1 / props.scale * 2000}px !important
    &:hover {
      background: #999;
    }
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      border-radius: 2px;
			left: ${1 / props.scale * 600}px;
			width: ${1 / props.scale * 300}px;
			height: ${1 / props.scale * 3000}px;
			margin-top: -${1 / props.scale * 1500}px;
      background-color: #fff;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      border-radius: 2px;
			left: ${1 / props.scale * 1200}px;
			width: ${1 / props.scale * 300}px;
			height: ${1 / props.scale * 3000}px;
			margin-top: -${1 / props.scale * 1500}px;
      background-color: #fff;
    }
  }
  .handle-bottom {
    background: #999;
    position: relative;
    background: #bbb;
    transition: background .3s;
    bottom: -${1 / props.scale * 2000}px !important;
    height: ${1 / props.scale * 2000}px !important
    &:hover {
      background: #999;
    }
    &:before {
      content: "";
      display: block;
      position: absolute;
      left: 50%;
      border-radius: 2px;
      top: ${1 / props.scale * 600}px;
			height: ${1 / props.scale * 300}px;
			width: ${1 / props.scale * 3000}px;
			margin-left: -${1 / props.scale * 1500}px;
      background-color: #fff;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 6px;
      left: 50%;
      border-radius: 2px;
			top: ${1 / props.scale * 1200}px;
			height: ${1 / props.scale * 300}px;
			width: ${1 / props.scale * 3000}px;
			margin-left: -${1 / props.scale * 1500}px;
      background-color: #fff;
    }
  }
  .handle-bottom-right {
    background: #bbb;
    transition: background .3s;
   	right: -${1 / props.scale * 2000}px !important;
		bottom: -${1 / props.scale * 2000}px !important;
		height: ${1 / props.scale * 2000}px !important;
		width: ${1 / props.scale * 2000}px !important;

    &:hover {
      background: #999;
    }
    &:before {
      content: "";
      display: block;
      position: absolute;
      background-color: #fff;
      transform: rotate(-45deg);
      border-radius: 2px;
      top: ${1 / props.scale * 800}px;
      left: 0;
      height: ${1 / props.scale * 300}px;
      width: ${1 / props.scale * 2000}px;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      background-color: #fff;
      transform: rotate(-45deg);
      border-radius: 2px;
      top: ${1 / props.scale * 1300}px;
      left: ${1 / props.scale * 800}px;
      height: ${1 / props.scale * 300}px;
      width: ${1 / props.scale * 1200}px;
    }
	}
	`
  }}`

const DeviceWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  position: relative;
  ${props => props.isNaked && `
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  `}
  ${props => !props.isNaked && `
  border: 2px solid #bcbcbc;
  animation ${deviceAnimation} .5s ease-out;
  ${(props.resizable || !props.hasFrame) ? '' : `
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
  `}
`;

const DeviceScreen = styled.iframe`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  ${props => !props.isNaked && `
  border: 1px solid #CCC;
  border-radius: 2px;
  `}
  ${props => props.isNaked && `
  border: none;
  `}
  ${props => !props.isLoading ? 'display: block;' : 'display: none;'}
`;

const LoadingScreen = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eee;
  position: relative;
`;

const Spinner = styled.div`
  position: absolute;
  z-index: 101;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 30px;
  margin-top: -15px;
  margin-left: -15px;
  border: 8px solid #333;
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${spinnerAnimation} .5s infinite linear;
`

export default class Device extends Component<DeviceComponentProps, { refreshTime: Date }> {

  static defaultProps = {
    isLoading: false,
    getUrl: ({ url, refreshTime, ua }) => url
  }

  iframe: HTMLElement;

  constructor(props) {
    super(props);
    this.state = {
      refreshTime: props.refreshTime || new Date()
    };
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

    if (resizable && !this.props.isNaked) {
      return Object.assign({}, resizeConf, { right: true, bottom: true, bottomRight: true });
    }
    return resizeConf;
  }

  getSize(state) {
    if (this.props.isNaked) {
      return { width: '100%', height: '100%' };
    }
    if (!state.hasFrame) {
      if (state.orientation === 'portrait') {
        return { width: state.width + 2, height: state.height + 2 };
      } else {
        return { width: state.height + 2, height: state.width + 2 };
      }
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

    iframe.addEventListener("load", () => {
      if (iframe && iframe.contentDocument && iframe.contentDocument.body) {
        iframe.contentDocument.body.style.width = '100vw';
      }
      if (this.props.onIframeLoaded) {
        this.props.onIframeLoaded();
      }
    });
  }

  render() {

    const { refreshTime, isLoading, isNaked } = this.props;

    return (<DeviceModeContext.Consumer>
      {(context: DeviceModeContextType) => (
        <DeviceContainer isNaked={isNaked}>
          <DeviceScaler scale={context.state.scale} isNaked={isNaked} >
            <Resizable
              enable={this.getRisizeConf(context.state.resizable)}
              size={this.getSize(context.state)}
              onResizeStop={
                (e, direction, ref, d) => {
                  context.actions.updateSize(context.state.width + d.width, context.state.height + d.height)
                }
              }
              handleClasses={{
                right: 'handle-right',
                bottom: 'handle-bottom',
                bottomRight: 'handle-bottom-right'
              }}
            >
              <DeviceWrapper
                resizable={context.state.resizable}
                height={context.state.height}
                orientation={context.state.orientation}
                hasFrame={context.state.hasFrame}
                isNaked={isNaked}>
                {isLoading &&
                  <LoadingScreen isNaked={isNaked}>
                    <Spinner />
                  </LoadingScreen>
                }
                <DeviceScreen
                  isNaked={isNaked}
                  isLoading={isLoading}
                  src={this.props.getUrl({
                    url: context.state.src,
                    refreshTime: refreshTime,
                    ua: context.state.ua
                  })} innerRef={(iframe: HTMLIframeElement) => {
                    this.iframe = iframe;
                  }} />
              </DeviceWrapper>
            </Resizable>
          </DeviceScaler>
        </DeviceContainer>
      )}
    </DeviceModeContext.Consumer>);
  }
}
