import React from 'react'
import Leftside from '../components/Leftside'
import Profilefeed from '../components/Profilefeed'

import Post from '../components/Post'
export default function Profile() {
  return (
    <div className="App flex lg:flex-row">
        <div className='lg:fixed '>
            <Leftside/> 
        </div>
        <div className="flex-1 p-4 overflow-auto lg:ml-[15vw] flex flex-col">
            <div>
                <Profilefeed /> 
            </div>
            <div className='overflow-auto w-full lg:w-3/5 lg:ml-[15vw]'>
                <Post/>
            </div>
            <div className='overflow-auto w-full lg:w-3/5 lg:ml-[15vw]'>
                <Post/>
            </div>
            <div className='overflow-auto w-full lg:w-3/5 lg:ml-[15vw]'>
                <Post/>
            </div>
        </div>
    </div>
  )
}
