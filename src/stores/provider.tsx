import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import DeviceModeContext, { DeviceModeContextType } from './context';
import { DeviceChangeEvent, DeviceType } from '../type';
import { FrameBottom, FrameLeft, FramePosTop, FrameRight, FrameTop } from '../constants';
import { getVisibleSize } from '../util';

interface DeviceModeContextProviderProps {
  devices?: DeviceType[];
  deviceName: DeviceType['name'];
  src: string;
  children?: React.ReactNode;
  isNaked?: boolean;
  i18n?: Record<string, string>;
  onDeviceUpdated?(evnet: DeviceChangeEvent): void;
  onDeviceInit?(event: DeviceChangeEvent): void;
  onClose?(): void;
}

const defaultValues = {
  devices: [],
  deviceName: '',
  width: null,
  height: null,
  src: '',
  scale: 100,
  orientation: 'portrait',
  isNaked: false,
  i18n: {
    fitWindow: 'fitWindow',
  },
};

export default function DeviceModeContextProvider({
  devices = [],
  deviceName: deviceNameProp = '',
  src,
  children,
  isNaked = false,
  i18n: i18nProp = {},
  onDeviceUpdated = () => {},
  onDeviceInit = () => {},
  onClose = () => {},
}: DeviceModeContextProviderProps) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const setFrameRef = useCallback((node: HTMLElement | null) => {
    frameRef.current = node as HTMLDivElement;
  }, []);
  const [device, setDevice] = useState(() => devices.find((item) => item.name === deviceNameProp) || devices[0]);
  const [scale, setScale] = useState(defaultValues.scale);
  const [orientation, setOrientation] = useState(defaultValues.orientation);

  const i18n = useMemo(() => ({ ...defaultValues.i18n, ...i18nProp }), [i18nProp]);

  const updateWidth = useCallback(
    (width: number) => setDevice((prevDevice) => ({ ...prevDevice, width: Math.round(width) })),
    [setDevice],
  );
  const updateHeight = useCallback(
    (height: number) => setDevice((prevDevice) => ({ ...prevDevice, height: Math.round(height) })),
    [setDevice],
  );
  const updateSize = useCallback(
    (width: number, height: number) =>
      setDevice((prevDevice) => ({ ...prevDevice, width: Math.round(width), height: Math.round(height) })),
    [setDevice],
  );

  const ajustWindowSize = useCallback(() => {
    if (!frameRef.current) {
      return;
    }

    if (isNaked) {
      updateWidth(frameRef.current.offsetWidth);
    } else if (device.resizable) {
      const frameSize = getVisibleSize(frameRef.current);

      if (device.width > frameSize.width - 45) {
        updateWidth(frameSize.width - 45);
      }
    }
  }, [device.resizable, device.width, isNaked, updateWidth]);

  const updateDevice = useCallback(
    (deviceName: string) => {
      const device =
        devices.find((item) => {
          if (item.name === deviceName) {
            return true;
          }
          return false;
        }) || devices[0];

      setDevice(device);

      if (onDeviceUpdated) {
        onDeviceUpdated({
          device,
          src,
          scale,
          orientation,
        });
      }
    },
    [devices, src, scale, orientation, onDeviceUpdated],
  );

  const updateScale = useCallback(
    (scale: number) => {
      if (frameRef.current === null) {
        return;
      }
      if (scale === -1) {
        const { width: containerWidth, height: containerHeight } = getVisibleSize(frameRef.current);
        const wrapperHeight = containerHeight - FramePosTop;
        const frameHeight = device.hasFrame ? device.height + FrameTop + FrameBottom + 20 : device.height + 20;
        const scaleHeightRatio = (wrapperHeight / frameHeight) * 100;
        const wrapperWidth = containerWidth;
        const frameWidth = device.hasFrame ? device.width + FrameRight + FrameLeft + 40 : device.width + 40;
        const scaleWidthRatio = (wrapperWidth / frameWidth) * 100;
        const scaleRatio = Math.min(scaleHeightRatio, scaleWidthRatio);
        setScale(scaleRatio);
      } else {
        setScale(scale);
      }
    },
    [device.hasFrame, device.height, device.width],
  );

  const switchOrientation = useCallback(() => {
    setOrientation((prev) => (prev === 'portrait' ? 'landscape' : 'portrait'));
  }, [setOrientation]);

  useEffect(() => {
    const handleResize = () => {
      ajustWindowSize();
    };
    window.addEventListener('resize', handleResize);
    ajustWindowSize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ajustWindowSize]);

  useEffect(() => {
    if (onDeviceInit) {
      onDeviceInit({
        device,
        src,
        scale,
        orientation,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value: DeviceModeContextType = useMemo(
    () => ({
      state: {
        devices,
        device,
        src,
        i18n,
        scale,
        orientation,
        isNaked,
      },
      actions: {
        updateWidth,
        updateHeight,
        updateSize,
        updateDevice,
        updateScale,
        switchOrientation,
        onClose,
      },
      frameRef,
      setFrameRef,
    }),
    [
      devices,
      device,
      src,
      i18n,
      scale,
      orientation,
      isNaked,
      updateWidth,
      updateHeight,
      updateSize,
      updateDevice,
      updateScale,
      switchOrientation,
      onClose,
      setFrameRef,
    ],
  );

  return <DeviceModeContext.Provider value={value}>{children}</DeviceModeContext.Provider>;
}
