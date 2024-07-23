import React, { ReactNode, useCallback, useMemo, useRef } from 'react';
import { useDeviceModeStore } from '../stores';
import styled from 'styled-components';

interface HeaderProps {
  headerLeft?: ReactNode;
  headerRight?: ReactNode;
  hasCloseBtn: boolean;
}

const InputStyle = styled.input`
  font-size: 16px;
  width: 80px;
  color: #333;
  line-height: 1;
  vertical-align: middle;
  background: #fbfbfb;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s;
  font-size: 13px;
`;

const HeaderStyle = styled.header`
  position: relative;
  background-color: #e9e9e9;
  padding: 5px 40px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FormStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px 10px;

  > * {
    display: inline-flex;
    align-items: center;
  }
`;

const InputDevider = styled.div`
  display: inline-block;
  padding: 0 5px;
`;

const BtnStyle = styled.button`
  padding: 3px 10px;
`;

const DismissBtnLayout = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
`;

const DismissBtn = styled.button`
  position: relative;
  background: transparent;
  border: none;
  display: block;
  width: 18px;
  height: 18px;
  padding: 0;
`;

const DismissBtnLine = styled.span`
  display: block;
  color: #333;
  width: 18px;
  height: 2px;
  position: relative;
  &:before,
  &:after {
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    content: '';
    transition: 0.3s all;
    border-radius: 1px;
    background-color: #333;
    width: 22px;
  }
  &:before {
    transform: translate(-2px, 6px) rotate(45deg);
    top: -6px;
  }
  &:after {
    transform: translate(-2px, -6px) rotate(-45deg);
    bottom: -6px;
  }
`;

const RotateIcon = styled.span`
  background: url('data:image/svg+xml;base64,PHN2ZyBpZD0i44Os44Kk44Ok44O8XzEiIGRhdGEtbmFtZT0i44Os44Kk44Ok44O8IDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgNDAgNDAiPjx0aXRsZT7jgqLjg7zjg4jjg5zjg7zjg4kgMSDjga7jgrPjg5Tjg7wgMzwvdGl0bGU+PHBhdGggZD0iTTM0LjY4LDI3LjM4LDIxLjc0LDIuNTNhMS44OCwxLjg4LDAsMCwwLTIuNTMtLjc5TDYuMDYsOC41OWExLjg2LDEuODYsMCwwLDAtLjc5LDIuNTJMMTguMiwzNmExLjg3LDEuODcsMCwwLDAsMi41My44TDMzLjg4LDI5LjlBMS44NywxLjg3LDAsMCwwLDM0LjY4LDI3LjM4Wk0xOC40MiwzMi4yMiw3LjgyLDExLjg2bDEzLjA3LTYuOCwxMC42LDIwLjM1WiIvPjxwb2x5bGluZSBwb2ludHM9IjI2LjY2IDguMjIgMjUuMjUgNC4wMyAyOS40NCAyLjYxIiBmaWxsPSJub25lIiBzdHJva2U9IiMyMzE4MTUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwb2x5bGluZSBwb2ludHM9IjEzLjkgMzIuMTMgMTUuMjggMzYuMzQgMTEuMDcgMzcuNzIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIzMTgxNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTI1LjM5LDQuMjJjLjUzLjE4LDEuMDUuMzksMS41Ni42MmExNi43NSwxNi43NSwwLDAsMSw5Ljc3LDE1LjIzYzAsLjU1LDAsMS4xLS4wOCwxLjY0YTE2LjksMTYuOSwwLDAsMS0uNTgsMyIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zLjIzLDIwLjA3cTAtLjc1LjA2LTEuNDdhMTcuMSwxNy4xLDAsMCwxLC41NC0zTC0uNzIsMTgsMTAuMDksMzguNDcsMTQuOCwzNkExNi43NCwxNi43NCwwLDAsMSwzLjIzLDIwLjA3WiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zLjgzLDE1LjYzYTE3LjEsMTcuMSwwLDAsMC0uNTQsM3EtLjA2LjcyLS4wNiwxLjQ3QTE2Ljc0LDE2Ljc0LDAsMCwwLDE0LjgsMzYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIzMTgxNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz48cGF0aCBkPSJNMzYuMDYsMjQuNzRhMTYuOSwxNi45LDAsMCwwLC41OC0zYzAtLjU0LjA4LTEuMDkuMDgtMS42NEExNi43NSwxNi43NSwwLDAsMCwyNyw0Ljg0Yy0uNTEtLjIzLTEtLjQ0LTEuNTYtLjYyIiBmaWxsPSJub25lIiBzdHJva2U9IiMyMzE4MTUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PC9zdmc+');
  background-size: cover;
  display: inline-block;
  width: 16px;
  height: 16px;
`;

export default function Header({ headerLeft, headerRight, hasCloseBtn }: HeaderProps) {
  const { state, actions } = useDeviceModeStore();
  const scaleSelectRef = useRef<HTMLSelectElement>(null);

  const scaleValue = useMemo(() => {
    if (scaleSelectRef.current === null) {
      return state.scale;
    }

    const { options } = scaleSelectRef.current;
    if (
      Array.from(options)
        .map((option) => option.value)
        .includes(String(state.scale))
    ) {
      return state.scale;
    }

    return '-1';
  }, [state.scale]);

  const handleDeviceChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      actions.updateDevice(e.target.value);
    },
    [actions],
  );

  const handleScaleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      actions.updateScale(parseInt(e.target.value, 10));
    },
    [actions],
  );

  const handleWidthChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      actions.updateWidth(parseInt(e.currentTarget.value));
    },
    [actions],
  );

  const handleHeightChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      actions.updateHeight(parseInt(e.currentTarget.value));
    },
    [actions],
  );

  const handleOrientationChange = useCallback(() => {
    actions.switchOrientation();
  }, [actions]);

  return (
    <HeaderStyle>
      <FormStyle className="acms-admin-form">
        {headerLeft && <div>{headerLeft}</div>}
        <div>
          <select defaultValue={state.device.name} onChange={handleDeviceChange}>
            {state.devices.map((device) => (
              <option value={device.name} key={device.name}>
                {device.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <InputStyle
            type="number"
            value={state.device.width}
            onChange={handleWidthChange}
            disabled={!state.device.resizable}
          />
          <InputDevider>×</InputDevider>
          <InputStyle
            type="number"
            value={state.device.height}
            onChange={handleHeightChange}
            disabled={!state.device.resizable}
          />
        </div>
        <div>
          <select ref={scaleSelectRef} value={scaleValue} onChange={handleScaleChange}>
            <option value="50">50%</option>
            <option value="75">75%</option>
            <option value="100">100%</option>
            <option value="125">125%</option>
            <option value="150">150%</option>
            <option value="-1">{state.i18n?.fitWindow || 'fitWindow'}</option>
          </select>
        </div>
        {!state.device.resizable && (
          <div>
            <BtnStyle type="button" onClick={handleOrientationChange} className="acms-admin-btn">
              <RotateIcon />
            </BtnStyle>
          </div>
        )}
        {headerRight && <div>{headerRight}</div>}
      </FormStyle>
      {hasCloseBtn && (
        <DismissBtnLayout>
          <DismissBtn onClick={actions.onClose}>
            <DismissBtnLine />
          </DismissBtn>
        </DismissBtnLayout>
      )}
    </HeaderStyle>
  );
}
