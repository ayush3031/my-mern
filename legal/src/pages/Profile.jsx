import React, { useEffect, useState } from 'react'
import Leftside from '../components/Leftside'
import Profilefeed from '../components/Profilefeed'
import Post from '../components/Post'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../redux/features/Userslice'
import { fetchPosts } from '../redux/features/Postslice'

export default function Profile() {

    const dispatch = useDispatch();
    const {user} = useSelector((state)=>state.user);
    const {posts} = useSelector((state)=>state.posts);
    useEffect(()=>{
        dispatch(fetchUser());
        dispatch(fetchPosts());

        console.log(user);
    },[])
    const userPosts = posts.filter((post) => post.username === user?.username);


    return (
        <div className="App flex lg:flex-row">
            <div className='lg:fixed '>
                <Leftside />
            </div>
            <div className="flex-1 p-4 overflow-auto lg:ml-[15vw] flex flex-col ">
                <div>
                    <Profilefeed noOfPosts={userPosts.length} />
                </div>
                <div className='text-[2px] relative left-1/4 mb-[2vh] font-["Bahnschrift_Condensed"]'>Your Posts:</div>
                {userPosts.map((post, index) => (
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
