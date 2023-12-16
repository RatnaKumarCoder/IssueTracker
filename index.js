const express=require('express');

const app=express();

const port=8000;

//loading the mongoose db connection
const db=require('./config/mongoose');

//configuring views
app.set('view engine','ejs');
app.set('views','./views');

//using a express middleware to serve static files 
// app.use(express.static("./assets"));
app.use(express.static('./assetts'));

//using express middleware to parse http request-form data so we can access it in req.body
app.use(express.urlencoded());

//configuring layouts
const expressLayouts=require('express-ejs-layouts');
app.use(expressLayouts);

//extracting the style and script links from main content and placing them in header
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


app.use('/',require('./router'));
//starting the server at port 8000
app.listen(port,err=>{
    if(err){
        console.log('error starting the server ',err);
    }
    console.log('server started successfully');
})
 