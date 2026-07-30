import React, { ReactNode, useCallback, useMemo, useRef } from 'react';
import { useDeviceModeStore } from '../stores';
import { cx } from '../util';
import './header.css';

interface HeaderProps {
  headerLeft?: ReactNode;
  headerRight?: ReactNode;
  hasCloseBtn: boolean;
}

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
    <header className="rdm-header">
      <div className={cx('rdm-form', 'acms-admin-form')}>
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
          <input
            className="rdm-input"
            type="number"
            value={state.device.width}
            onChange={handleWidthChange}
            disabled={!state.device.resizable}
          />
          <div className="rdm-input-divider">×</div>
          <input
            className="rdm-input"
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
            <button type="button" onClick={handleOrientationChange} className={cx('rdm-btn', 'acms-admin-btn')}>
              <span className="rdm-rotate-icon" />
            </button>
          </div>
        )}
        {headerRight && <div>{headerRight}</div>}
      </div>
      {hasCloseBtn && (
        <div className="rdm-dismiss-btn-layout">
          <button className="rdm-dismiss-btn" onClick={actions.onClose}>
            <span className="rdm-dismiss-btn-line" />
          </button>
        </div>
      )}
    </header>
  );
}
