import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDeviceMode from '../src/index.tsx';

class TestPreview extends Component<{}, {url: string}> {

  constructor(props) {
    super(props);
    this.state = {
      url: '/test/test.html'
    }
  }

  render () {
    const { url } = this.state;
    return (<div style={{height: '100vh'}}>
    <link rel="stylesheet" href="https://developer.a-blogcms.jp/themes/system/css/acms-admin.css" />
    <ReactDeviceMode src={url} i18n={ {fitWindow: '画面サイズにあわせる'} } devices={[
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
  onUrlChange={(url) => {
    this.setState({
			url
		})
  }}
  getIframe={(iframe) => console.log(iframe)}
  onClose={() => console.log('closed')}
  header={<button>header</button>}
  sub={<button>test</button>}
  /></div>)
  }
}

render(<TestPreview />, document.querySelector('#root'));
