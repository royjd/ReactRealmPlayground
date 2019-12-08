const MongoClient = require('mongodb').MongoClient;
const myInitDatabase = require('./baseDatabase');
//Create a database named "mydb":
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("mydb"); //here
    console.log("Database created!");
    dbase.createCollection("students");
    myInitDatabase.initDatabase.forEach(item => {
        dbase.collection('customers').insert(item)
            
    })
   const col = dbase.collection('customers')
    col.find().toArray((err,docs) => {
        console.log('COLECTION LENGTH', docs.length)
        db.close();
    })
});