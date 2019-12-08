const MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
const url = "mongodb://localhost:27017/";

const Query = {
   greeting:() => {
      return "hello from  TutorialsPoint !!!"
   },
   todoLists:() => {
      const result = [];
      MongoClient.connect(url, function(err, db) {
         if (err) throw err;
         var dbase = db.db("mydb"); //here
         const col = dbase.collection('customers')
         col.find().toArray((err,docs) => {
            console.log('COLECTION LENGTH', docs.length)
            resuts = docs;
            db.close();
         })
      });
      return resuts;
   }
}

module.exports = {Query}