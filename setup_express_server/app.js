
// Import the express framework to later make an instance of to make use of its server functions
const express = require("express");

// Make an instance of express framework import above that can further be used to call express functions. 
const app = express();

// Use the port variable to assign the port for the project. E.x:- port 3000
const PORT = 2000;


// Using the listen to function we can drive a port to host our project on a server on the localhost.
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
});