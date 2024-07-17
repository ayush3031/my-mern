const Post = require("../models/post");
const User = require("../models/user");
const { getUser } = require("../service/auth");

async function handleCreatePost(req, res) {
    const email = req.user.email;

    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const { name, username } = user;
        const { content } = req.body;
        const image = req.file ? `http://localhost:5000/uploads/${req.file.filename}` : '';
        console.log(name);
        console.log(username);
        console.log(content);
        const newPost = await Post.create({
            name:name,
            username:username,
            content:content,
            image:image,
        });
        console.log(name);
        res.status(201).json({ message: "New Post Created", post: newPost });
    }
    catch (err) {
        res.status(500).json({ message: "Server error" });
    }
}

async function handleGetPosts(req, res) {
    console.log('getpost');
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        console.log(posts);
        res.json(posts);
    }
    catch (err) {
        res.status(500).json({ message: "Server error" });
    }
}

module.exports = {
    handleCreatePost,
    handleGetPosts,
}