const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
  userId: String,
  text: String,
  image: String,
  likes: [String],
}, { timestamps: true });
const Posts = mongoose.model("Post",postSchema);

module.exports = Posts;
