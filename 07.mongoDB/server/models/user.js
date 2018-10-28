const mongoose = require('mongoose');

// User
const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minLength: 1
  }
});

module.exports = {
  User
};