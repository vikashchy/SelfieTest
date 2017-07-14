var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://MLISCCLDB0034:27017/SelfieTar";

exports.updateDb= function updateCust (){
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("Customer").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
}

exports.insertDb = function insertCust (jsonEntity)
{
    var MongoClient = require('mongodb').MongoClient;
    var False = new Boolean(false)
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var False = new Boolean(false)
        var True = new Boolean(true)
        db.collection("Customer").insertOne(jsonEntity, function(err, res) {
            if (err) throw err;
            console.log("1 record inserted");
            db.close();
        });
    });
}

exports.showDb= function showCust (){
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("Customer").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
}