import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { TbSquareArrowLeft } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";

export default function Right({onAskQuestionClick}) {
    //user
    const [user,setuser] = useState(null);
    useEffect(()=>{
        const getuser = async()=>{
            try {
                const response = await axios.get(`http://localhost:5000/home/getuser`,{withCredentials:true});
                setuser(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Unable to get user');
            }
            console.log(user);
        } 
        getuser();
    },[]);


    const handleAskButton = () =>{
        toggleSidebar();
        onAskQuestionClick();
    }

    const handleRightArrow = ()=>{
        toggleSidebar();
    }
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='border-l-[1px] border-zinc-500 lg:w-[49vh] '>
            {/* Toggle Button */}
            <div className='lg:hidden p-8'>
                <button
                    onClick={toggleSidebar}
                    className="lg:hidden fixed top-4 right-4  text-zinc-800 text-3xl px-[7px] py-[7px] rounded"
                >&#9776;
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 bg-zinc-900 text-white h-full p-4 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform lg:translate-x-0 lg:static lg:w-64 w-64 sm:w-[30vh] lg:fixed flex flex-col items-center gap-[2vh] border-l-[1px] border-zinc-500`}
            >
                <a href="/profile" className="block py-2  flex flex-col gap-[10px] items-center">
                    <img className='rounded-[70px] h-[20vh] w-[20vh] ' src={user?user.profilePicture:'https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png'}></img>
                    <h1 className='text-[3vh] font-light'>You</h1>
                    <h1 className='text-[2.5vh] font-light'>@{user?user.username:''}</h1>
                </a>
                <div>
                    <button 
                        onClick={handleAskButton}
                        className='bg-[#1A8CD8] py-[2vh] px-[5vh] rounded-full'>
                            Ask Question
                    </button>
                </div>
                <div className='m-[10px] border-[1px] rounded-[4vw]'>
                    <button onClick={handleRightArrow} className='py-[2vh] px-[5vh] rounded-full'>
                        <FaArrowRight className='text-[4vh] ' />
                    </button>
                </div>
                
            </div>
        </div>

    )
}
