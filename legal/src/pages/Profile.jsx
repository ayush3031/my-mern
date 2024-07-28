import React, { useEffect, useState } from 'react'
import Leftside from '../components/Leftside'
import Profilefeed from '../components/Profilefeed'
import Post from '../components/Post'
import axios from 'axios'

export default function Profile() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            try {

                const response = await axios.get(`https://my-mern-1.onrender.com/users/profile/posts`, { withCredentials: true });
                setPosts(response.data);
                console.log('fetched posts');
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchPosts();
    },[]);

    return (
        <div className="App flex lg:flex-row">
            <div className='lg:fixed '>
                <Leftside />
            </div>
            <div className="flex-1 p-4 overflow-auto lg:ml-[15vw] flex flex-col ">
                <div>
                    <Profilefeed noOfPosts={posts.length} />
                </div>
                <div className='text-[28px] relative left-1/4 mb-[2vh] font-["Bahnschrift_Condensed"]'>Your Posts:</div>
                {posts.map((post, index) => (
                    <div key={post._id}>
                        <Post
                        key={index}
                        name={post.name}
                        username={post.username}
                        content={post.content}
                        image={post.image}
                        date={post.createdAt}
                        likes={post.likes}
                        bookmarks={post.bookmarks}
                        comments={post.comments}
                        id={post._id}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
