const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        username:{
            type: String,
            required: true,
            unique:true,
        },
        email:{
            type: String,
            required: true,
            unique:true,
        },
        password:{
            type: String,
            required: true,
        },
        profilePicture: {
            type: String,
            default: '',
          },
          bio: {
            type: String,
            default: '',
          },
          followers: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'User',
            },
          ],
          following: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'User',
            },
          ],
          createdAt: {
            type: Date,
            default: Date.now,
          },
    },
    { timestamps: true}
);

const User = mongoose.model('user',userSchema);

module.exports = User;