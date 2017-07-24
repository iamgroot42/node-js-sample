var http = require('http'),
    httpProxy = require('http-proxy');

httpProxy.createProxyServer({target:'http://laiwyer.eastus2.cloudapp.azure.com/botapi'}).listen(process.env.PORT || 1024);
