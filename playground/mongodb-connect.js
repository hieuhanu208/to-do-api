//const Mongoclient = require('mongodb').MongoClient;
//Object Destructoring
const {MongoClient,ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
     return console.log('Unable to connect to Mongo DB');
    }
    console.log('Connected successfully');


    // db.collection('Todos').insertOne({
    //     text:'Something to do ',
    //     completed:false
    // }, (err,result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    // db.collection('User').insertOne({
        
    //     name:' Hieu Nguyen',
    //     age:21,
    //     location:'Viet Nam'
    // },(err,result) => {
    //     if (err) {
    //        return console.log('Unable to insert',err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    // })

     db.close();
});