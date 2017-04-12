exports.getDb = function(){
    var nano = require('nano')('http://localhost:5984');
    var db = nano.db.use('monitoring');
    return db;
}