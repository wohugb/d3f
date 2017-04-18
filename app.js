'use strict';

var express = require('express')
const http = require('http');
const compression = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');

var app = express()
app.use(function(req, res, next){
  var env = app.get('env');
 	if(req.protocol === 'http'&&req.hostname === 'wx.91pintuan.com'){
 		var url = 'https://'+req.hostname+req.url;
    res.redirect(url);
    return;
  }
  next();
});
var server = http.createServer(app);

app.set('trust proxy', true);
app.use(express.static('./dist',{index:false}));
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());

app.route('/*')
  .get((req, res) => {
    res.sendFile(path.resolve( './dist/index.html'));
  });

// Start server
function startServer() {
  app.angularFullstack = server.listen(3000, function() {
    console.log('服务:3000');
  });
}

setImmediate(startServer);

exports = module.exports = app;
