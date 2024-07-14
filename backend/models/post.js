const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
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
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
        bookmarks: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment',
            },
        ],
        createdAt: {
            type: Date,
            default: Date.now,
        },
    }
)

const Post = mongoose.model('post',postSchema);

module.exports = Post;