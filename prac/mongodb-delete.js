const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err){
    return console.log('Unable to connect');
  }
  console.log('connection successful');

  db.collection('Todos').deleteOne({text:'hero aadmi'}).then((result) => {
    console.log(result);
  });


  //db.close();
});
