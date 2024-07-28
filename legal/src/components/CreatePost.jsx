import axios from 'axios';
import React, { useState } from 'react'



export default function CreatePost() {

    const [postContent, setPostContent] = useState('');
    const [image, setImage] = useState(null);

    const handlePostContentChange = (e) => {
        setPostContent(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let formData={};
        if(image)
        {
            formData = {
                content : e.target.content.value,
                image:image,
            }
        }
        else 
        {
            formData = {
                content : e.target.content.value,
            }
        }
       
        //formData.append('content', postContent);

        
        console.log(formData);
        try {
            const response = await axios.post('https://my-mern-qn9y.onrender.com/home/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true
            });
            console.log('hey');
            console.log('Post created:', response.data);
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };
    return (
        <div className=" top-0 left-0 right-0 max-w-xl mx-auto mb-[2vh] p-4 bg-zinc-900  shadow-md rounded-md">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="What's on your mind?"
                        name='content'
                        rows="4"
                        value={postContent}
                        onChange={handlePostContentChange}
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="file"
                        name='image'
                        accept="image/*"
                        onChange={handleImageChange}
                        className="block w-full text-sm text-gray-500
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-full file:border-0
                       file:text-sm file:font-semibold
                       file:bg-blue-50 file:text-blue-700
                       hover:file:bg-blue-100"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Post
                </button>
            </form>
        </div>
    );
};


