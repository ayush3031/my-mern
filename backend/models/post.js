const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            ref: 'User',
        },
        content: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            default: '',
        },
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
        bookmarks: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
        comments: [
            { 
                user: 
                {   type: mongoose.Schema.Types.ObjectId,
                    ref: 'User' 
                },
                text: { type: String },
            }
        ],
        createdAt: {
            type: Date,
            default: Date.now,
        },
    }
)

const Post = mongoose.model('post',postSchema);

module.exports = Post;