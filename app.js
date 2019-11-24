const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000
const passport = require('passport');
var session = require('express-session');
const indexRoute = require('./routes/index');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const userRoute = require('./routes/user');
const mongoose = require('mongoose');
const cors = require('cors');

const mongoDB = 'mongodb://127.0.0.1/catalog-network';

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Access-Control-Allow-Origin: *
app.use(cors({
  credentials: true,
}));

app.use(session({
  secret: 's3cr3t',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

mongoose.connect(mongoDB, { useFindAndModify: false });
//Get the default connection
var db = mongoose.connection;

//Routing definition
app.use('/', indexRoute);
app.use('/auth', authRoute);
app.use('/product', productRoute);
app.use('/user', userRoute);

db.on('connected', function() {
  console.log('Mongoose connected!!')
})




//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
