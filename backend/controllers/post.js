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
        console.log("kk");
        res.status(201).json({ message: "New Post Created", post: newPost });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
}

async function handleGetPosts(req, res) {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        console.log(posts);
        res.json(posts);
    }
    catch (err) {
        res.status(500).json({ message: "Server error" });
    }
}

async function handleGetComments(req,res)
{
    const postId = req.params;
    //console.log(postId.id);
    const {comments }= await Post.findOne({_id:postId.id});
    //console.log('jo');
    //console.log(comments);
    return res.status(201).send(comments);
}

async function handleAddNewComment(req,res)
{
    const postId = req.params;
    const {content } = req.body;
    const userUid = req.cookies.uid;
    //console.log(content);
    if(!userUid) return res.status(404).json({message:"User not found"});
    const user = getUser(userUid);

    if(!user) return res.status(404).json({message:"User not found"});
    
    try {
        const email = user.email;
        const userWithComment = await User.findOne({email});
        
        const name = userWithComment.username;
        const id = postId.id;
        const comment = {
            user: name,
            text:content
        }
        const post = await Post.updateOne(
            { _id:id },
            {$push : {comments: comment }}
        );
        //console.log(post);
        res.status(201).json({message:"Commented"});
    } catch (error) {
        res.status(400).json({message:"Error adding cmnt"});
    }

}


async function handleIsLiked(req,res)
{
    const postId = req.params.id;
    const userUid = req.cookies.uid;
    if(!userUid) return res.status(404).json({message:"User not found"});
    const user = getUser(userUid);

    if(!user) return res.status(404).json({message:"User not found"});
    
    try {
        const email = user.email;
        const userWithLike = await User.findOne({email});
        const userName = userWithLike.username;
        const id = postId;
        const post = await Post.findOne({ _id:id });
        if(!post)
        {
            res.status(400).json({message:"Post not found"});
        }
        else
        {
            const hasliked = post.likes.includes(userName);
            res.status(201).json({message:"like status",
                likestatus: hasliked}, 
            );
        }
    } 
    catch (error) {
        res.status(400).json({message:"Error fetching like status"});
    }
}


async function handleAddRemoveLike(req,res)
{
    const postId = req.params.id;
    const userUid = req.cookies.uid;
    if(!userUid) return res.status(404).json({message:"User not found"});
    const user = getUser(userUid);

    if(!user) return res.status(404).json({message:"User not found"});
    
    try {
        const email = user.email;
        const userWithLike = await User.findOne({email});
        const userName = userWithLike.username;
        const id = postId;
        const post = await Post.findOne({ _id:id });
        if(!post)
        {
            res.status(400).json({message:"Post not found"});
        }
        else
        {
            const hasliked = post.likes.includes(userName);
            if(!hasliked)
            {
                const updatedPost = await Post.findByIdAndUpdate(
                    id,
                    {$push:{likes:userName}},
                    { new: true });
                res.status(201).json({message:"like status",
                    likes : updatedPost.likes.length,
                    likedBy : userName,
                    status: hasliked}, 
                );
            }
            else 
            {
                const updatedPost = await Post.findByIdAndUpdate(
                    id,
                    {$pull:{likes:userName}},
                    { new: true });
                
                res.status(201).json({message:"like status",
                    likes : updatedPost.likes.length,
                    status : hasliked},
                );
            }
        }
    } 
    catch (error) {
        res.status(400).json({message:"Error liking post"});
    }
}


async function handleGetUser(req,res)
{
    const postId = req.params;

    const post = await Post.findById(postId.id);
    if(!post)
    {
        return res.status(404).json({message:"Not Found"});
    }
    //console.log(post);
    const username = post.username;
    const user = await User.findOne({username});
    return res.status(201).json(user);
}

async function handleDeletePost(req,res)
{
    const postId = req.params.id;
    console.log('hello');
    console.log(postId);
    if(postId)
    {
        const querry = {_id:postId};
        try {
            await Post.deleteOne(querry);
            return res.status(201).json({message:"Post deleted successfully"});
        }
        catch(err)
        {
            return res.status(404).json({message:"error deleting post"});
        }

    }
}



module.exports = {
    handleCreatePost,
    handleGetPosts,
    handleGetComments,
    handleAddNewComment,
    handleAddRemoveLike,
    handleIsLiked,
    handleGetUser,
    handleDeletePost,
}