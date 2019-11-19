const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
const mongoDB = 'mongodb://127.0.0.1/local';
mongoose.connect(mongoDB, { useNewUrlParser: true });
//Get the default connection
var db = mongoose.connection;

db.on('connected', function() {
  console.log('Mongoose connected!!')
})

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
