const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

const express = require('express');

const Book = require('./models/book'); 

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = process.env.PORT || 5000;

app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-RequestedWith, Content-Type, Accept");

  next();

});

app.get('/api/test', (req, res) => {

 res.send('The API is working!');

});

app.listen(port, () => {

 console.log(`listening on port ${port}`);

});

app.get('/api/book', (req, res) =>
  {
    Book.find({}, (err, book) => {

    if (err == true) {
      return res.send(err);
    } 

    else {
      return res.send(book);
    }
  });
});

app.post('/api/book', (req, res) => 
{
  const { name, genre, status, sensorData} = req.body;

  const newBook = new Book({
    name,
    genre,
    status,
    sensorData
  });

  newBook.save(err => {
    return err
    ? res.send(err)
    : res.send('successfully added Book and data');
  });
});
   
