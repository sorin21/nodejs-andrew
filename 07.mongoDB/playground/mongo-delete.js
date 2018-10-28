// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Database server!', err);
  }
  console.log('Connected to MongoDB server!');

  const db = client.db('TodoApp');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) => {
  //   console.log(result);
  // }, err => {
  //   console.log('Unable to deleteMany ', err);
  // });

  // deteteOne
  // db.collection('Todos').deleteOne({ text: 'Something to not do' }).then((result) => {
  //   console.log(result);
  // }, err => {
  //   console.log('Unable to deleteMany ', err);
  // });

  // findOneAndDelte
  db.collection('Todos').findOneAndDelete({ text: 'Something to do' }).then((result) => {
    console.log(result);
  }, err => {
    console.log('Unable to findOneAndDelete ', err);
  });
  // client.close();
});