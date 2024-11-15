const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the User schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'], // You can adjust roles as needed
    default: 'admin'
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  blogs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Blog' // Refers to the Blog model for a one-to-many relationship
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Export the User model
module.exports = mongoose.model('User', UserSchema);
