import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { NumberSize, Resizable, ResizeDirection } from 're-resizable';
import { useDeviceModeStore } from '../stores';
import { FrameLeft, FrameRight, FrameTop, FrameBottom, FramePosTop } from '../constants';
import { cx } from '../util';
import './device.css';

export interface DeviceProps {
  refreshTime?: Date;
  getUrl?(option: { url: string; ua: string; refreshTime: Date }): string;
  onIframeLoaded?(): void;
  getIframe?(iframe: HTMLIFrameElement): void;
  isLoading?: boolean;
  isNaked?: boolean;
}

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

  const hasFramePadding = !isNaked && !state.device.resizable && state.device.hasFrame;

  const framePadding = useMemo(() => {
    if (state.orientation === 'portrait') {
      return { top: FrameTop, right: FrameRight, bottom: FrameBottom, left: FrameLeft };
    }
    return { top: FrameRight, right: FrameBottom, bottom: FrameLeft, left: FrameTop };
  }, [state.orientation]);

  const wrapperStyle = {
    '--rdm-frame-pad-top': `${framePadding.top}px`,
    '--rdm-frame-pad-right': `${framePadding.right}px`,
    '--rdm-frame-pad-bottom': `${framePadding.bottom}px`,
    '--rdm-frame-pad-left': `${framePadding.left}px`,
  } as React.CSSProperties;

  return (
    <div
      ref={setFrameRef}
      className={cx('rdm-device-container', !isNaked && 'rdm-device-container--framed')}
      style={{ '--rdm-frame-pos-top': `${FramePosTop}px` } as React.CSSProperties}
    >
      <div
        className={cx('rdm-device-scaler', isNaked ? 'rdm-device-scaler--naked' : 'rdm-device-scaler--scaled')}
        style={{ '--rdm-scale': state.scale } as React.CSSProperties}
      >
        <Resizable
          className="rdm-resizable"
          enable={enable}
          size={size}
          onResizeStop={handleResizeStop}
          handleClasses={{
            right: 'handle-right',
            bottom: 'handle-bottom',
            bottomRight: 'handle-bottom-right',
          }}
        >
          <div
            className={cx(
              'rdm-device-wrapper',
              isNaked ? 'rdm-device-wrapper--naked' : 'rdm-device-wrapper--bordered',
              hasFramePadding && 'rdm-device-wrapper--frame',
            )}
            style={wrapperStyle}
          >
            <div className="rdm-device-screen">
              {isLoading && (
                <div className="rdm-loading-screen">
                  <div className="rdm-spinner" />
                </div>
              )}
              <iframe
                title="device preview"
                className={cx(
                  'rdm-device-view',
                  isNaked && 'rdm-device-view--naked',
                  isLoading && 'rdm-device-view--loading',
                )}
                src={iframeSrc}
                ref={iframeRef}
                onLoad={handleIframeLoad}
              />
            </div>
          </div>
        </Resizable>
      </div>
    </div>
  );
}
