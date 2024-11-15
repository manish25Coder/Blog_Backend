const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Blog schema
const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String // URL or file path to the thumbnail image
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Refers to the User model for a many-to-one relationship
    required: true
  }
});

// Export the Blog model
module.exports = mongoose.model('Blog', BlogSchema);
