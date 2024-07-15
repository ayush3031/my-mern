import React from 'react'
import Navbar from './Navbar'
import Post from './Post'
import CreatePost from './CreatePost'

export default function Feed() {
  return (
    <div className='w-full h-[500vh] bg-zinc-300 '>
        <Navbar/>
        <CreatePost/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}
