import express from "express";
const app = express()
const port = 3002;

app.get('/', (req, res) => {
    res.send("<h1>Welcome to the Ajay's Home Page.</h1>\n he is a busy person");
  })
  app.get('/about', (req, res) => {
    res.send('<h1>About Ajay</h1>\nMy name is Ajay\n I do nothing.');
  })
  app.get('/contact', (req, res) => {
    res.send('<h1>Contact Me</h1>\n+343243434534435');
  })



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })