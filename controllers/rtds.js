var express = require('express')
  , router = express.Router()
  , Rtd = require('../models/rtd')


router.get('/rtd', function(req, res) {
  Rtd.retrieveByMac(req.query.mac, function (err, body) {
    var result = [];
    for(var i in body.rows){
      result.push(body.rows[i].value);
    }
    res.send(result);
  })
})

router.get('/', function(req, res){
  Rtd.retrieveAll(function(err, body){
    var result = [];
    for(var i in body.rows){
      result.push(body.rows[i].value);
    }
    res.send(result);
  })
})

router.post('/', function(req, res) {
  Rtd.insert(req.body, function (err, body) {
    if(!err){
      res.send("Success!");
    }else{
      res.send(err);
    }
  })
})

router.post('/test', function(req, res){
  Rtd.getByDevices(req.body.devices, function(err, body){
    if(!err){
      res.send(body);
    }else{
      res.send(err);
    }
  })
  
})

module.exports = router