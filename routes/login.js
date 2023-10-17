const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send(`
    <form action='/' method='POST'>
      <input type='text' name='name' id='name' placeholder='name'>
      <button type='submit'>Login</button>
    </form>
    <script>
      // Store the username in localStorage when the form is submitted
      document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('name').value;
        localStorage.setItem("username", username);
       
      });
    </script>
  `);
});

router.post("/", (req, res) => {
  res.send(`<form action='/' method='POST'>
  <input type='text' name='message' id='message' placeholder='message'>
  <button type='submit'>Login</button>
</form>`);
  
       const obj = req.body;
  
  res.send("Data has been received and processed on the server");
});

module.exports = router;
