const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err){
    return console.log('Unable to connect');
  }
  console.log('connection successful');

  // db.collection('Todos').find({completed:false}).toArray().then((docs) => {
  //
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err) => {
  //   console.log('Error in fetching ',err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //
  //   console.log('Todos count : ',count);
  // },(err) => {
  //   console.log('Error in counting ',err);
  // });

  db.collection('users').find({name:'rohan'}).toArray().then((docs) => {
    console.log('users');
    console.log(JSON.stringify(docs,undefined,2));
  },(err) => {
    console.log('Error in fetching ',err);
  });

  //db.close();
});
