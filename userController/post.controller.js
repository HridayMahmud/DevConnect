const jwt = require('jsonwebtoken');

const Post = require('../users-model/post.model');

const createPost = async (req, res) => {
    try {
        const { text } = req.body;
        const image = req.file ? `/uploads/${req.file.filename}` : null;

        //create post
        const Posts = await Post.create({
            userId: req.user,
            text, 
            image

        });
        if (Posts) {
            res.status(200).json({
                message: "post created successfully",
                POST: Posts
            });
        }
        else {
            res.status(400).json({
                message: "post creation failed"
            });
        }
    }

    catch (error) {
        message: error.message
    }
}

//getPosts 
const getPosts = async (req, res) => {
    try {
        const allPosts = await Post.find().sort({ createdAt: -1 });
        if (allPosts) {
            res.status(200).json({
                Totalpost: allPosts.length,allPosts
            });
        }
    }
    catch (error) {
        res.status(404).json({
            message: "POSTS NOT FOUND",
            error: error.message
        });
    }
}

//like posts
const likePost = async (req, res) => {
    try {

        const posts = await Post.findById(req.params.id);

        const idx = posts.likes.indexOf(req.user);
        if (idx === -1) {
            posts.likes.push(req.user);
            return res.json({
                message: "user has liked the post"
            });
        }
        else {
            posts.likes.splice(idx, 1);

        }
        await posts.save();
        res.json({
            post: posts
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "post not found"
        });
    }
}

module.exports = { createPost, getPosts, likePost }