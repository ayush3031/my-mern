import React, { useEffect, useRef, useState } from 'react'
import { BiUpvote } from "react-icons/bi";
import { BiSolidUpvote } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";

export default function Post() {

    const myRef = useRef(null);
    useEffect(()=>{
        myRef.current.addEventListener('click',handleLiked);
        return ()=>{
            myRef.current.removeEventListener('click',handleLiked);
        }
    })
    function handleLiked()
    {
        toggleLiked(!isLiked);
    }
    const [isLiked,toggleLiked]= useState(false);

  return (
    <div className=' ml-[4vh] mr-[4vh] flex flex-col justify-center bg-zinc-900 rounded-[15px] text-white mb-[1vh] flex-1 p-4 lg:pl-0 lg:pr-0'>
        <div className='bg-zinc-900 pt-[4vh] px-[4vh] flex items-center gap-[1vh] text-white overflow-wrap rounded-t-[15px]'>
            <img className='rounded-[70px] h-[9vh] w-[9vh]' src='https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'></img>
            <h1 className=' font-semibold'>Harry Brook</h1>
            <h1 className='font-light text-gray-300'>|</h1>
            <h1 className='font-light text-gray-300'>@harry123</h1>
            <h1 className='font-light text-gray-300'>|</h1>
            <h1 className='font-light text-gray-300'>14 July </h1>
            <h1 className='font-light text-gray-300'>|</h1>
            <h1 className='font-light text-gray-300'>2024</h1>
        </div>
        <div className='flex items-center justify-left mb-[2vh]'>
            <h1 className='ml-[30px]'>Hey there jkbwiohdpojfo;ejn</h1>
        </div>
        <div className=' border-t-[1px] border-b-[1px] border-zinc-400'>
            <div className='image container  my-[3vh] flex justify-center'>
                <img className='object-contain w-[50vh] h-[50vh] rounded-md border-[1px] border-gray-500' src='https://pbs.twimg.com/media/GR_acgHaUAEcFzf?format=jpg&name=900x900'></img>
            </div>
        </div>
        <div className='ml-[5vh] grid grid-cols-3 gap-[10vh] text-[3.5vh] py-[1vh]'>
            <span ref={myRef} className='flex items-center gap-[5px]'>{!isLiked?<BiUpvote size={"4.5vw"}/>:<BiSolidUpvote size={"4.5vh"} />}25</span>
            <h1 className='flex items-center gap-[10px]'><FaRegCommentAlt size={"20px"} />26</h1>
            <h1 className='flex items-center gap-[10px]'><FaRegBookmark size={"20px"}/>28</h1>
        </div>
    </div>
  )
}
