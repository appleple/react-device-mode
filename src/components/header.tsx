import React, { Component, Fragment } from 'react';
import { DeviceModeContext } from '../context';
import styled from 'styled-components';

const InputStyle = styled.input`
  font-size: 16px;
  padding: 4px 5px !important;
  width: 50px;
  color: #333;
  line-height: 1;
  vertical-align: middle;
  background: #fbfbfb;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 3px;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.1);
  transition: background-color .2s;
  font-size: 13px;
`;

const HeaderStyle = styled.header`
  background-color : #e9e9e9;
  padding: 5px 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
`;

const HeaderInner = styled.div`
`

const InputGroup = styled.div`
  display: inline-block;
  margin-left: 10px;
`

const InputDevider = styled.div`
  display: inline-block;
  margin-right: 5px;
  margin-left: 5px;
`

const BtnStyle = styled.button`

`

export default class Header extends Component {
  render () {
    return (<HeaderStyle>
      <DeviceModeContext.Consumer>
        {context => 
          <Fragment>
            <HeaderInner className="acms-admin-form">
            <select onChange={(e) => {context.actions.updateDevice(e.target.value)}}>
              {context.state.devices.map(device => <option value={device.ua}>{device.name}</option>)}
            </select>
              <InputGroup>
              <InputStyle type="number" value={context.state.width} onInput={(e) => {context.actions.updateWidth(e.target.value)}} disabled={context.state.resizable !== true} />
              <InputDevider>×</InputDevider>
              <InputStyle type="number" value={context.state.height} onInput={(e) => {context.actions.updateHeight(e.target.value)}} disabled={context.state.resizable !== true}/>
              </InputGroup>
              <InputGroup>
                <select value={context.state.scale} onChange={(e) => {
                  context.actions.updateScale(e.target.value)
                }}>
                  <option value="50">50%</option>
                  <option value="75">75%</option>
                  <option value="100">100%</option>
                  <option value="125">125%</option>
                  <option value="150">150%</option>
                  <option value="-1">{context.state.i18n && context.state.i18n.fitWindow ? context.state.i18n.fitWindow : 'fitWindow'}</option>
                </select>
              </InputGroup>
              {context.state.resizable === false &&
                <InputGroup>
                  <BtnStyle onClick={context.actions.switchOrientation} className="acms-admin-btn">Portrait</BtnStyle>
                </InputGroup>
              }
            </HeaderInner>
          </Fragment>
        }
      </DeviceModeContext.Consumer>
    </HeaderStyle>)
  }
}