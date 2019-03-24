var express = require('express');
var app = express();
const expressip = require('express-ip');
app.use(expressip().getIpInfoMiddleware);


app.set('trust proxy', true);



app.get('/', function(req, res) {
  res.send('Hola Mundo!');
  var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
  console.log(req.ipInfo);
});

app.post('/', function(req, res) {
    res.send('Hola Mundo!');
    console.log(req);
  });

app.listen(80, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 80!');
});