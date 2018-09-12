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
  padding-top: ${FrameTop}px;
  padding-left: ${FrameLeft}px;
  padding-right: ${FrameRight}px;
  padding-bottom: ${FrameBottom}px;
  border-radius: 35px;
  clear: both;
  background: #fff;
  box-sizing: border-box;
  &:before {
    content: "";
    border: 2px solid #bcbcbc;
    position: absolute;
    bottom: 10px;
    left: calc(50% - 20px);
    width: 40px;
    height: 40px;
    border-radius: 20px;
    box-sizing: border-box;
  }
  &:after {
    content: "";
    border: 3px solid #bcbcbc;
    position: absolute;
    top: 25px;
    left: calc(50% - 40px);
    width: 80px;
    height: 6px;
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

  render () {
    
    return (<DeviceModeContext.Consumer>
      {context => (
        <DeviceContainer>
          <Resizable enable={this.getRisizeConf(context.state.resizable)} size={{width: context.state.width + FrameLeft + FrameRight + 6, height: context.state.height + FrameTop + FrameBottom + 6}} onResizeStop={
            (e, direction, ref, d) => {
              context.actions.updateSize(context.state.width + d.width, context.state.height + d.height)
            } 
          }>
            <DeviceWrapper resizable={context.state.resizable} scale={context.state.scale} height={context.state.height}>
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