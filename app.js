const http = require("http");
const express = require("express");
const bodyParser=require("body-parser");
const loginRoute=require("./routes/login.js")
const app= express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(loginRoute);
app.get("/",(req,res)=>{
    res.send("hello");
})


app.listen(4000,()=>{
    console.log("server invoked at http://localhost:4000");
})