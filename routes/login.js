const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send(`
    <form action='/' method='GET' onsubmit="localStorage.setItem('username', document.getElementById('username').value)">
      <input type='text' name='username' id='username' placeholder='name'>
      <button type='submit'>Login</button>
    </form>`);
});

router.get("/", (req, res) => {
  fs.readFile("message.txt", 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      data = "no chat found";
    }

    res.send(`</br>${data}</br><form action='/' method='POST' onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
      <input type='text' name='message' id='message' placeholder='message'>
      <input hidden type='text' name='username' id='username' placeholder='message'>
      <button type='submit'>send</button>
    </form>`);
  });
  });

router.post("/",(req,res,next)=>{
  let username=req.body.username;
let message=req.body.message;
let data= username+": "+message;
fs.writeFile("message.txt", data, { flag: 'a' }, (err) => {
  if (err) {
    console.error("Error writing to file: " + err);
  } else {
    console.log("Data appended to file successfully.");
  }
});
res.redirect('/');
});

module.exports = router;
