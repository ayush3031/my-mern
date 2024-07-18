import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Post from './Post'
import CreatePost from './CreatePost'
import axios from 'axios'
import { useNavigate } from 'react-router'


export default function Feed() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    const getposts = async ()=> {
      try {
        //const config = { 'content-type': 'application/json' };
        const response = await axios.get('http://localhost:5000/home/posts',{
          withCredentials:true,
          credentials: "include",
        });
        setPosts(response.data);
        console.log(response.data);
      } catch (error) {
        console.log('error');
        navigate('/');
      }
    }
    getposts();
  },[navigate]);
  

  return (
    <div className='w-full h-[500vh] bg-zinc-300 '>
        <Navbar/>
        <CreatePost/>
        {
        posts.map((post,index)=>(
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
        ))}
    </div>
  )
}
