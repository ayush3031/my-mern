const Post = require("../models/post");

async function handleCreatePost(req,res)
{
    const {username ,userId ,content,image,} = req.body; 
    try{
        const newPost = await Post.create({
            userId,
            username,
            content,
            image,
        });
        res.status(201).json({message:"New Post Created"});
    }
    catch(err)
    {
        res.status(500).json({message:"Server error"});
    }
}

async function handleGetPosts(req,res)
{
    try{
        const posts = await Post.find().sort({ createdAt: -1 });
        res.json(posts);
    }
    catch(err)
    {
        res.status(500).json({message:"Server error"});
    }
}

module.exports = {
    handleCreatePost,
    handleGetPosts,
}