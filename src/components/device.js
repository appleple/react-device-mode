import React, { Component, Fragment } from 'react';
import Resizable from 're-resizable';
import styled from 'styled-components';

const FrameLeft = 18;
const FrameRight = 18;
const FrameTop = 50;
const FrameBottom = 70;

const DeviceContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #DDDDDD;
  height: 100vh;
  padding-top: 50px;
  box-sizing: border-box;
  overflow: auto;
`;

const DeviceWrapper = styled.div`
  margin: 20px auto;
  border: 2px solid #bcbcbc;
  width: 100%;
  height: 100%;
  position: relative;
  transform: scale(${(props) => {
    if (props.scale === -1) {
      return (window.innerHeight - 235) / props.height 
    } else {
      return props.scale / 100
    }
  }});
  transform-origin: top center;
  ${props => props.resizable ? '': `
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

import { DeviceModeContext } from '../context';

export default class Device extends Component {

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
    const width = state.width + FrameLeft + FrameRight + 6;
    const height = state.height + FrameTop + FrameBottom + 6;
    if (state.orientation === 'portrait' || state.resizable === true) {
      return { width, height }
    }
    return { width: height, height: width }
  }

  render () {
    
    return (<DeviceModeContext.Consumer>
      {context => (
        <DeviceContainer>
          <Resizable enable={this.getRisizeConf(context.state.resizable)} size={this.getSize(context.state)} onResizeStop={
            (e, direction, ref, d) => {
              context.actions.updateSize(context.state.width + d.width, context.state.height + d.height)
            } 
          }>
            <DeviceWrapper resizable={context.state.resizable} scale={context.state.scale} height={context.state.height} orientation={context.state.orientation} resizable={context.state.resizable}>
              <DeviceScreen key={context.state.ua} src={`${context.state.src}?ua=${context.state.ua}`} innerRef={(iframe) => {
                this.iframe = iframe;
                this.ua = context.ua;
              }}/>
            </DeviceWrapper>
          </Resizable>
        </DeviceContainer>
      )}
    </DeviceModeContext.Consumer>);
  }
}