const mongoose=require('mongoose');

//connecting to mongoDB on URL
mongoose.connect("mongodb://127.0.0.1:27017/issueTracker");

//storing the connection object in db varibale
const db=mongoose.connection;

//one time event listener to log error at the time of connection
db.on('error',console.error.bind(console,'error connecting to mongoDB'));

//one time event listener when connection is set
db.once('open',function(){
    console.log('successfully connected to database');
});

module.exports=db;



