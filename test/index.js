import React from 'react';
import { render } from 'react-dom';
import ReactDeviceMode from '../src/index.js';

render(<div>
  <link rel="stylesheet" href="http://acms.lab/themes/system/css/acms-admin.css" />
  <ReactDeviceMode src='https://developer.a-blogcms.jp' devices={[
  {
    name: 'iPhone 6',
    ua: 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    width: 375,
    height: 667,
    resizable: false
  },
  {
    name: 'responsive',
    ua: 'none',
    width: 768,
    height: 768,
    resizable: true
  },
  {
    name: 'Galaxy S9+ SCV39',
    ua: 'Mozilla/5.0 (Linux; Android 8.0.0; SCV39 Build/16NW) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/7.0 Chrome/59.0.3071.125 Mobile Safari/537.36',
    width: 360,
    height: 640,
    resizable: false
  }
]}/></div>, document.querySelector('#root'));