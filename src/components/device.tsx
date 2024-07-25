import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { NumberSize, Resizable, ResizeDirection } from 're-resizable';
import styled, { css, keyframes } from 'styled-components';
import { useDeviceModeStore } from '../stores';
import { FrameLeft, FrameRight, FrameTop, FrameBottom, FramePosTop } from '../constants';

export interface DeviceProps {
  refreshTime?: Date;
  getUrl?(option: { url: string; ua: string; refreshTime: Date }): string;
  onIframeLoaded?(): void;
  getIframe?(iframe: HTMLIFrameElement): void;
  isLoading?: boolean;
  isNaked?: boolean;
}

const deviceAnimation = keyframes`
  from {
    transform: translateY(-30px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

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
`;

const DeviceContainer = styled.div<{
  $isNaked: boolean;
}>`
  width: 100%;
  flex: 1;
  ${(props) =>
    !props.$isNaked &&
    css`
      background-color: #dddddd;
      padding-top: ${FramePosTop}px;
      padding-right: 10px;
      padding-left: 10px;
      box-sizing: border-box;
      overflow: auto;
    `}
`;

const DeviceScaler = styled.div<{
  $isNaked: boolean;
  $scale: number;
}>`
  height: 100%;
  ${(props) =>
    props.$isNaked &&
    css`
      width: 100%;
    `}
  ${(props) =>
    !props.$isNaked &&
    css`
      transform: scale(${props.$scale / 100});
      transform-origin: top center;
      .handle-right {
        position: relative;
        background: #bbb;
        transition: background 0.3s;
        right: -${(1 / props.$scale) * 2000}px !important;
        width: ${(1 / props.$scale) * 2000}px !important;
        &:hover {
          background: #999;
        }
        &:before {
          content: '';
          display: block;
          position: absolute;
          top: 50%;
          border-radius: 2px;
          left: ${(1 / props.$scale) * 600}px;
          width: ${(1 / props.$scale) * 300}px;
          height: ${(1 / props.$scale) * 3000}px;
          margin-top: -${(1 / props.$scale) * 1500}px;
          background-color: #fff;
        }
        &:after {
          content: '';
          display: block;
          position: absolute;
          top: 50%;
          border-radius: 2px;
          left: ${(1 / props.$scale) * 1200}px;
          width: ${(1 / props.$scale) * 300}px;
          height: ${(1 / props.$scale) * 3000}px;
          margin-top: -${(1 / props.$scale) * 1500}px;
          background-color: #fff;
        }
      }
      .handle-bottom {
        background: #999;
        position: relative;
        background: #bbb;
        transition: background 0.3s;
        bottom: -${(1 / props.$scale) * 2000}px !important;
        height: ${(1 / props.$scale) * 2000}px !important;
        &:hover {
          background: #999;
        }
        &:before {
          content: '';
          display: block;
          position: absolute;
          left: 50%;
          border-radius: 2px;
          top: ${(1 / props.$scale) * 600}px;
          height: ${(1 / props.$scale) * 300}px;
          width: ${(1 / props.$scale) * 3000}px;
          margin-left: -${(1 / props.$scale) * 1500}px;
          background-color: #fff;
        }
        &:after {
          content: '';
          display: block;
          position: absolute;
          top: 6px;
          left: 50%;
          border-radius: 2px;
          top: ${(1 / props.$scale) * 1200}px;
          height: ${(1 / props.$scale) * 300}px;
          width: ${(1 / props.$scale) * 3000}px;
          margin-left: -${(1 / props.$scale) * 1500}px;
          background-color: #fff;
        }
      }
      .handle-bottom-right {
        background: #bbb;
        transition: background 0.3s;
        right: -${(1 / props.$scale) * 2000}px !important;
        bottom: -${(1 / props.$scale) * 2000}px !important;
        height: ${(1 / props.$scale) * 2000}px !important;
        width: ${(1 / props.$scale) * 2000}px !important;

        &:hover {
          background: #999;
        }
        &:before {
          content: '';
          display: block;
          position: absolute;
          background-color: #fff;
          transform: rotate(-45deg);
          border-radius: 2px;
          top: ${(1 / props.$scale) * 800}px;
          left: 0;
          height: ${(1 / props.$scale) * 300}px;
          width: ${(1 / props.$scale) * 2000}px;
        }
        &:after {
          content: '';
          display: block;
          position: absolute;
          background-color: #fff;
          transform: rotate(-45deg);
          border-radius: 2px;
          top: ${(1 / props.$scale) * 1300}px;
          left: ${(1 / props.$scale) * 800}px;
          height: ${(1 / props.$scale) * 300}px;
          width: ${(1 / props.$scale) * 1200}px;
        }
      }
    `}
`;

const DeviceWrapper = styled.div<{
  $isNaked: boolean;
  $resizable: boolean;
  $hasFrame: boolean;
  $orientation: string;
}>`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  position: relative;
  ${(props) =>
    props.$isNaked &&
    `
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  `}
  ${(props) =>
    !props.$isNaked &&
    css`
  border: 2px solid #bcbcbc;
  animation ${deviceAnimation} .5s ease-out;
  ${
    props.$resizable || !props.$hasFrame
      ? ''
      : `
  ${
    props.$orientation === 'portrait' || props.$resizable
      ? `
    padding-top: ${FrameTop}px;
    padding-left: ${FrameLeft}px;
    padding-right: ${FrameRight}px;
    padding-bottom: ${FrameBottom}px;
  `
      : `
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
    ${
      props.$orientation === 'portrait' || props.$resizable
        ? `
      bottom: 10px;
      left: calc(50% - 20px);
    `
        : `
      right: 10px;
      bottom: calc(50% - 20px);
    `
    }
    width: 40px;
    height: 40px;
    border-radius: 20px;
    box-sizing: border-box;
  }
  &:after {
    content: "";
    border: 3px solid #bcbcbc;
    position: absolute;
    ${
      props.$orientation === 'portrait' || props.$resizable
        ? `
      top: 25px;
      left: calc(50% - 40px);
      width: 80px;
      height: 6px;
    `
        : `
      left: 25px;
      top: calc(50% - 40px);
      width: 6px;
      height  80px;
    `
    }
    border-radius: 5px;
    box-sizing: border-box;
  }
  `
  }
  `}
`;

const DeviceScreen = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const DeviceView = styled.iframe<{
  $isNaked: boolean;
  $isLoading: boolean;
}>`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #fff;
  ${(props) =>
    !props.$isNaked &&
    `
  border: 1px solid #CCC;
  border-radius: 2px;
  `}
  ${(props) =>
    props.$isNaked &&
    `
  border: none;
  `}
  ${(props) => (!props.$isLoading ? 'visibility: visible;' : 'visibility: hidden;')}
`;

const LoadingScreen = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eee;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
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
  animation: ${spinnerAnimation} 0.5s infinite linear;
`;

const StyledResizable = styled(Resizable)`
  margin: 0 auto;
`;

export default function Device({
  isLoading: isLoadingProp = false,
  getUrl = ({ url }) => url,
  refreshTime = new Date(),
  isNaked = false,
  getIframe = () => {},
  onIframeLoaded = () => {},
}: DeviceProps) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const { state, actions, setFrameRef } = useDeviceModeStore();
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  const iframeSrc = useMemo(
    () =>
      getUrl({
        url: state.src,
        refreshTime: refreshTime,
        ua: state.device.ua,
      }),
    [state.src, refreshTime, state.device.ua, getUrl],
  );

  const handleIframeLoad = useCallback(
    (event: React.SyntheticEvent<HTMLIFrameElement>) => {
      const iframe = event.target as HTMLIFrameElement;
      if (iframe && iframe.contentDocument && iframe.contentDocument.body) {
        iframe.contentDocument.body.style.maxWidth = '100vw';
      }
      if (onIframeLoaded) {
        onIframeLoaded();
      }
      setIsIframeLoading(false);
    },
    [onIframeLoaded],
  );

  useEffect(() => {
    setIsIframeLoading(true);
  }, [iframeSrc]);

  const isLoading = useMemo(() => isIframeLoading || isLoadingProp, [isIframeLoading, isLoadingProp]);

  const enable = useMemo(
    () => ({
      top: false,
      right: state.device.resizable && !isNaked,
      bottom: state.device.resizable && !isNaked,
      left: false,
      topRight: false,
      bottomRight: state.device.resizable && !isNaked,
      bottomLeft: false,
      topLeft: false,
    }),
    [isNaked, state.device.resizable],
  );

  const size = useMemo(() => {
    if (isNaked) {
      return { width: '100%', height: '100%' };
    }
    if (!state.device.hasFrame) {
      if (state.orientation === 'portrait') {
        return { width: state.device.width + 2, height: state.device.height + 2 };
      } else {
        return { width: state.device.height + 2, height: state.device.width + 2 };
      }
    }
    const width = state.device.width + FrameLeft + FrameRight + 6;
    const height = state.device.height + FrameTop + FrameBottom + 6;
    if (state.orientation === 'portrait') {
      return { width, height };
    }
    return { width: height, height: width };
  }, [isNaked, state.device.hasFrame, state.device.height, state.device.width, state.orientation]);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) {
      return;
    }

    if (getIframe) {
      getIframe(iframe);
    }
  }, [getIframe]);

  const handleResizeStop = useCallback(
    (_e: MouseEvent | TouchEvent, _direction: ResizeDirection, _ref: HTMLElement, d: NumberSize) => {
      actions.updateSize(state.device.width + d.width, state.device.height + d.height);
    },
    [actions, state.device.width, state.device.height],
  );

  return (
    <DeviceContainer ref={setFrameRef} $isNaked={isNaked}>
      <DeviceScaler $scale={state.scale} $isNaked={isNaked}>
        <StyledResizable
          enable={enable}
          size={size}
          onResizeStop={handleResizeStop}
          handleClasses={{
            right: 'handle-right',
            bottom: 'handle-bottom',
            bottomRight: 'handle-bottom-right',
          }}
        >
          <DeviceWrapper
            $resizable={state.device.resizable}
            $orientation={state.orientation}
            $hasFrame={state.device.hasFrame}
            $isNaked={isNaked}
          >
            <DeviceScreen>
              {isLoading && (
                <LoadingScreen>
                  <Spinner />
                </LoadingScreen>
              )}
              <DeviceView
                $isNaked={isNaked}
                $isLoading={isLoading}
                src={iframeSrc}
                ref={iframeRef}
                onLoad={handleIframeLoad}
              />
            </DeviceScreen>
          </DeviceWrapper>
        </StyledResizable>
      </DeviceScaler>
    </DeviceContainer>
  );
}
