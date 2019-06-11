const { Schema, model } = require('mongoose')

const PostSchema = new Schema({
  author: String,
  location: String,
  legend: String,
  hashtags: String,
  image: String,
  likes: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

module.exports = model('Post', PostSchema)
