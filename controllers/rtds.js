var express = require('express')
  , router = express.Router()
  , Rtd = require('../models/rtd')
  , queries = require('../helpers/queries')

router.get('/rtd', function(req, res) {
  Rtd.retrieveByMac(req.query.mac, function (err, body) {
    res.send(body.rows);
  })
})

router.get('/', function(req, res){
  Rtd.retrieveAll(function(err, body){
    res.send(body.rows);
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

router.get('/test', function(req, res){
  var result = queries.selectorByDevices(["b19", "b6", "b11"]);
  res.send(result);
})

module.exports = router