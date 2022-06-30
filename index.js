const AnyProxy = require('anyproxy');
const options = {
  port: 8080,
  webInterface: {
    enable: true,
    webPort: 8081
  },
  forceProxyHttps: false,
  wsIntercept: false,
  silent: false
};
const proxyServer = new AnyProxy.ProxyServer(options);

proxyServer.on('ready', () => { /* */ });
proxyServer.on('error', (e) => { /* */ });
proxyServer.start();

//when finished
proxyServer.close();
