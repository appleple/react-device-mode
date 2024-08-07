import React from 'react';
import { createRoot } from 'react-dom/client'
import ReactDeviceMode from '../../dist/index.mjs';
import { useEffect, useState } from 'react';

function MyApp() {
  const [isNaked, setIsNaked] = useState(false);
  const [url, setUrl] = useState('/examples/pages/1.html');

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data.task === 'preview') {
        console.log(e.data.url);
        setUrl(e.data.url);
      }
    }
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);
  return (
    <div style={{ height: '100vh' }}>
      <ReactDeviceMode
        isNaked={isNaked}
        src={url}
        i18n={{ fitWindow: '画面サイズにあわせる' }}
        hasHistoryDevice={true}
        devices={[
          {
            name: 'PC',
            ua: 'none',
            width: 1366,
            height: 768,
            resizable: true,
            hasFrame: false
          },
          {
            name: 'iPhone 6',
            ua: 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
            width: 375,
            height: 667,
            resizable: false,
            hasFrame: true
          },
          {
            name: 'iPhone X',
            ua: 'none',
            width: 375,
            height: 812,
            resizable: false,
            hasFrame: false
          },
          {
            name: 'Galaxy S9+ SCV39',
            ua: 'Mozilla/5.0 (Linux; Android 8.0.0; SCV39 Build/16NW) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/7.0 Chrome/59.0.3071.125 Mobile Safari/537.36',
            width: 360,
            height: 640,
            resizable: false,
            hasFrame: true
          }
        ]}
        getUrl={({ url, ua, refreshTime }) => {
          console.log(url, ua, refreshTime);
          return url;
        }}
        onDeviceUpdated={(event) => {
          console.log('update device', event);
        }}
        onDeviceInit={(event) => {
          console.log('init device', event);
        }}
        getIframe={(iframe) => console.log(iframe)}
        onClose={() => console.log('closed')}
        headerLeft={<button>header</button>}
        headerRight={<button onClick={() => {
          setIsNaked((prev) => !prev);
        }}>isNaked toggle</button>}
      />
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<MyApp />);
