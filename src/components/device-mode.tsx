import React, { useCallback } from 'react';
import { DeviceModeContextProvider } from '../stores';
import Header from './header';
import Device from './device';
import { DeviceChangeEvent, DeviceType } from '../type';
import styled, { keyframes } from 'styled-components';

interface DeviceModeProps
  extends Pick<
    React.ComponentProps<typeof DeviceModeContextProvider>,
    'devices' | 'i18n' | 'isNaked' | 'onClose' | 'onDeviceUpdated' | 'src'
  > {
  hasHistoryDevice?: boolean;
  historyDeviceKey?: string;
  defaultDevice?: DeviceType['name'];
  header: React.ComponentPropsWithoutRef<typeof Header>['header'];
  sub: React.ComponentPropsWithoutRef<typeof Header>['sub'];
  hasCloseBtn?: React.ComponentPropsWithoutRef<typeof Header>['hasCloseBtn'];
  isLoading?: React.ComponentPropsWithoutRef<typeof Device>['isLoading'];
  refreshTime?: React.ComponentPropsWithoutRef<typeof Device>['refreshTime'];
  getUrl?: React.ComponentPropsWithoutRef<typeof Device>['getUrl'];
  onUrlChange?: React.ComponentPropsWithoutRef<typeof Device>['onUrlChange'];
  onIframeLoaded?: React.ComponentPropsWithoutRef<typeof Device>['onIframeLoaded'];
  getIframe?: React.ComponentPropsWithoutRef<typeof Device>['getIframe'];
}

const showAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Viewer = styled.div`
  height: 100%;
  width: 100%;
  animation: ${showAnimation} 0.5s ease-out;
`;

export default function DeviceMode({
  hasCloseBtn = true,
  isLoading = false,
  hasHistoryDevice = true,
  historyDeviceKey = 'reactDeviceModeHistory',
  defaultDevice = '',
  onClose = () => {},
  getIframe = () => {},
  onUrlChange = () => {},
  onIframeLoaded = () => {},
  onDeviceUpdated = () => {},
  header,
  sub,
  ...props
}: DeviceModeProps) {
  const getHistoryDeviceName = useCallback((): string | null => {
    if (hasHistoryDevice && historyDeviceKey) {
      try {
        const historyDevice = localStorage.getItem(historyDeviceKey);
        return historyDevice;
      } catch {
        return null;
      }
    }
    return null;
  }, [hasHistoryDevice, historyDeviceKey]);

  const setHistoryDeviceName = useCallback(
    (deviceName: string) => {
      if (hasHistoryDevice && historyDeviceKey) {
        try {
          localStorage.setItem(historyDeviceKey, deviceName);
        } catch {
          return;
        }
      }
    },
    [hasHistoryDevice, historyDeviceKey],
  );

  const handleUrlChange = useCallback(
    (url: string) => {
      if (onUrlChange) {
        onUrlChange(url);
      }
    },
    [onUrlChange],
  );

  const handleIframeLoaded = useCallback(() => {
    if (onIframeLoaded) {
      onIframeLoaded();
    }
  }, [onIframeLoaded]);

  const handleGetIframe = useCallback(
    (iframe: HTMLIFrameElement) => {
      getIframe(iframe);
    },
    [getIframe],
  );

  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const handleDeviceUpdated = useCallback(
    (event: DeviceChangeEvent) => {
      setHistoryDeviceName(event.device.name);
      if (onDeviceUpdated) {
        onDeviceUpdated(event);
      }
    },
    [onDeviceUpdated, setHistoryDeviceName],
  );

  const { refreshTime, getUrl, isNaked, devices = [], src, i18n = {} } = props;

  return (
    <DeviceModeContextProvider
      devices={devices}
      deviceName={getHistoryDeviceName() || defaultDevice}
      src={src}
      isNaked={isNaked}
      i18n={i18n}
      onDeviceUpdated={handleDeviceUpdated}
      onClose={handleClose}
    >
      <Viewer>
        {!isNaked && <Header header={header} sub={sub} hasCloseBtn={hasCloseBtn} />}
        <Device
          isNaked={isNaked}
          refreshTime={refreshTime}
          getUrl={getUrl}
          isLoading={isLoading}
          onUrlChange={handleUrlChange}
          onIframeLoaded={handleIframeLoaded}
          getIframe={handleGetIframe}
        />
      </Viewer>
    </DeviceModeContextProvider>
  );
}
