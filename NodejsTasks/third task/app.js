const express=require ("express");
const mongose=require('mongoose');
const app=express();

mongose.connect("mongodb+srv://usersdatabase:<password>@cluster0-pqq2u.mongodb.net/test?retryWrites=true&w=majority",
{useNewUrlParser:true, useUnifiedTopology:true}
)
.then(result=>{
    console.log("database connected");
    "mongodb+srv://usersdatabase:<password>@cluster0-pqq2u.mongodb.net/test?retryWrites=true&w=majority";
}).catch(err=>{
    console.log(err);
});