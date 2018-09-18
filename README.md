# react-device-mode

![](./screenshot.png)

# Install

```sh
$ npm install react-device-mode --save
```

# Usage

```js
<ReactDeviceMode
  src={src}
  i18n={{ fitWindow: '画面サイズにあわせる' }}
  onClose={() => {}}
  devices={[
    {
      name: 'PC',
      ua: 'none',
      width: window.innerWidth - 100,
      height: window.innerHeight - 300,
      resizable: true
    },
    {
      name: 'iPhone 6/7/8',
      ua: 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
      width: 375,
      height: 667,
      resizable: false
    },
  ]}
/>);
```
