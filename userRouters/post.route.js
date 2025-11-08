const express = require('express');
const multer = require('multer');
const { createPost, getPosts, likePost, } = require('../userController/post.controller');
const protect = require('../Middleware/authMiddleware.js');


const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", protect, upload.single("image"), createPost);

router.get("/",getPosts);

router.put("/like/:id",protect,likePost);

module.exports = router;