import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import Post from './Post'
import CreatePost from './CreatePost'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { useDispatch , useSelector } from 'react-redux'
import { fetchPosts } from '../redux/features/Postslice'
import { Store } from '../redux/store'

export default function Feed({focusInput , setFocusInput}) {
  const dispatch = useDispatch();
  const { posts, loading ,error } = useSelector((state)=>state.posts);


  useEffect(()=>{
    Store.dispatch(fetchPosts());
    console.log(posts.length);
  },[dispatch]);

  const navigate = useNavigate();

  /*const [posts, setPosts] = useState([]);
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
  },[navigate]);*/
  

  return (
    <div className='w-full h-full bg-zinc-300 '>
        <Navbar/>
        <CreatePost focusInput={focusInput} setFocusInput = {setFocusInput}/>
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
