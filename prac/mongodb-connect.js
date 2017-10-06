const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err){
    return console.log('Unable to connect');
  }
  console.log('connection successful');

  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   completed : false
  // },(err,result) => {
  //   if(err){
  //     return console.log('Unable to insert data',err);
  //   }
  //   console.log('data successfully inserted');
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  db.collection('users').insertOne({
    name: 'rohan',
    age: 23,
    location: 'kolkata'
  },(err,result) => {
    if(err){
      return console.log('Unable to insert user',err);
    }
    console.log('user successfully inserted');
    console.log(JSON.stringify(result.ops,undefined,2));
  });


  db.close();
});
