// this piece of code is to require and connect it at some place in line 5.

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//this is a  shortcut to mongoose.connection object
//when we connect to the db,we have access to it by checking to mongoose.connection which is a property object.
//db.on means when connection is actually connected then run a call back in the function.
const db = mongoose.connection;

db.on('connected', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});