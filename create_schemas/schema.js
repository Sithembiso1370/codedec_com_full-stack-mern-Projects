
const mongoose = require("mongoose");




//connecting to database
mongoose.connect("mongodb://localhost:27017/Dogs",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {
    console.log("DB CONNECTED");
  });


// Create a Dog schema Schema
var dogSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed:String
})
 
var Dog = mongoose.model("Dog",dogSchema);


//Create
Dog.create({
    name: "Roy",
    age: 17,
    breed: "Huky"
 }, function(err, dog){
     if(err){
         console.log(err);
     } else {
         console.log("Successfully saved"
);
     }
 });


//Show Collections
 Dog.find({},(err, dog)=>{
     if(err){
         console.log("Not Worked");
         console.log(err);
     }else{
         console.log("All dogs in DB are");
         console.log(dog);
     }
 })