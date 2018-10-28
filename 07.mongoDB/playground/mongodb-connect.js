// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB Database server!', err);
  }
  console.log('Connected to MongoDB server!');

  // const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert todo!', err);
  //   }
  //   // undefined for filter, 2 fro in indetantion
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })
  // db.collection('Users').insertOne({
  //   name: 'Sorin',
  //   age: '25',
  //   location: 'Bucharest'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert todo!', err);
  //   }
  //   // undefined for filter, 2 fro in indetantion
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2))
  // })

  client.close();
});