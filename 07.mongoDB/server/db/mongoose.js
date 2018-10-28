const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connect to database
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

module.exports = {
  mongoose
}