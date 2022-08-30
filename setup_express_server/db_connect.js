// Import the express framework for later use
const express = require("express");
// Use the imported framework to create an express instance for server management capabillities
const app = express();

// Import the mongoose framework for Mongo Db database management capabillities
const mongoose = require('mongoose');
 
// Create a DB connection with mongoDB usiong mpongoose
mongoose.connect('mongodb://localhost:27017/Tutorial',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DB Connected Successfully");
});

// testing nodemon refresh

//  Route - Create a a Route for the "/" route to be hosted on the localhost
app.get("/",(req, res)=>{
    res.send("<h1>Hello World</h1>");
});


//  Create a variable to hold the PORT
const PORT = 2000;

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
});