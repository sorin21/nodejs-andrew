// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Database server!', err);
  }
  console.log('Connected to MongoDB server!');

  const db = client.db('TodoApp');


  // db.collection('Todos').find({
  //   _id: new ObjectID("5bd4c9c08f0c181544d4c55f")
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }), (error) => {
  //   console.log('Unable to fetch todos', error);
  // }

  db.collection('Users').find({
    name: "Dana"
  }).toArray().then((docs) => {
    console.log('USers');
    console.log(JSON.stringify(docs, undefined, 2));
  }), (error) => {
    console.log('Unable to fetch users', error);
  }

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //   // console.log(JSON.stringify(count, undefined, 2));
  // }), (error) => {
  //   console.log('Unable to fetch todos', error);
  // }
  // client.close();
});