const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/issueTracker");

const db=mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to mongoDB'));

db.once('open',function(){
    console.log('successfully connected to database');
});

module.exports=db;



