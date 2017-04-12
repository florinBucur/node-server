var express = require('express')
  , app = express()
  , bodyParser = require('body-parser')

require('./application.properties.js');

app.set('views', __dirname + '/views')
app.engine('jade', require('jade').__express)
app.set('view engine', 'jade')

app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Cache-Control","no-cache");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(require('./controllers'))

 var server = app.listen(PORT, SERVER_NAME, function () {

        var host = server.address().address;
        var port = server.address().port;

        console.log("Example app listening at http://%s:%s", host, port)

    });