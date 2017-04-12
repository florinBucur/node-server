var dbConfig = require('../helpers/db.js');
var db = dbConfig.getDb();
var queries = require('../helpers/queries')

exports.insert = function(data, cb) {
  db.insert(data, cb);
}

// Get a particular data
exports.retrieveByMac = function(id, cb) {
  db.view('getByMac','by_mac',{key : id}, cb);
}

// Get all
exports.retrieveAll = function( cb) {
  db.view('getByMac','by_mac', cb);
}

exports.getByDevices = function(devices, cb) {
  var selector = queries.selectorByDevices(devices);
  db.get(selector, cb);
}

