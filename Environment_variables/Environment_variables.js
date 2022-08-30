// Require the package in 
require('dotenv').config()

// Require express 
const express = require("express");
// cREATE AN INSTANCE OF EXPRESS
const app = express();
// REQUIRE MONGOOSE
const mongoose = require('mongoose');


// Create a database connection
mongoose.connect(process.env.URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DB Connected Successfully");
});

// Configure a get route
app.get("/",(req, res)=>{
    res.send("Hello World");
});

console.log(process.env.PORT)
app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`);
});