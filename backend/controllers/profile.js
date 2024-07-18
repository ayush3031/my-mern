const Post = require("../models/post");
const User = require("../models/user");


async function handleSendUserDetails(req,res)
{
    const email = req.user.email;
    const user = await User.findOne({email});
    if(!user)
    {
        res.status(404).json({message:"User Not found"});
    }
    return res.json(user);
}

async function handleUpdateProfilePicture(req,res)
{
    const email = req.user.email;
    console.log(email);
    console.log(req.file);
    const image = req.file ? `http://localhost:5000/dps/${req.file.filename}` : '';
    console.log(image);
    const user = await User.findOneAndUpdate(
        {email},
        {profilePicture:image},
    );
    if(!user)
    {
        return res.status(402).json({message:"User Not found"});
    }
    return res.status(201).json({image});
}

async function handleUpdateBio(req,res)
{
    const email = req.user.email;
    const { bio } = req.body;
    const user = await User.findOneAndUpdate(
        {email},
        {bio},
    );
    if(!user)
    {
        return res.status(402).json({message:"User Not found"});
    }
    return res.status(201).json({message:"Bio updated"});
}

async function handleFetchPosts(req,res)
{
    const email = req.user.email;
    const user = await User.findOne({email});
    if(!user)
    {
        return res.status(402).json({message:"User Not found"});
    }
    const username = user.username;
    const posts = await Post.find({username});
    return res.status(201).send(posts);
}

module.exports = {
    handleSendUserDetails,
    handleUpdateProfilePicture,
    handleUpdateBio,
    handleFetchPosts,
};