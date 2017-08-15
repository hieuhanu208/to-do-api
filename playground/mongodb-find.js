//const Mongoclient = require('mongodb').MongoClient; Object Destructoring
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongo DB');
    }
    console.log('Connected successfully');

    // db.
    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos counts :'+ count);
    
    // },(err) => {
    //     console.log('Unable to fetch todo',err)
    // })
    db.collection('User').find({age:21}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined,2));
    })

    //db.close();
});