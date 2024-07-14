import React from 'react'
import { TiHome } from "react-icons/ti";
import { LuUserCircle } from "react-icons/lu";
import { BsBookmark } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { IoLogOutOutline } from "react-icons/io5";
import { useState } from 'react';

export default function Leftside() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        setIsOpen(!isOpen);
    };

        const currentPath = window.location.pathname;

        return (
            <div className='border-r-[1px] border-zinc-500 block lg:w-[39vh]'>
                <div className="lg:hidden p-8 ">
                    <button onClick={toggleSidebar} className="lg:hidden fixed top-4 left-4  text-zinc-800 text-3xl px-[7px] py-[7px] rounded">&#9776;</button>
                </div>

                {/*sidebar*/}
                <div className={` fixed top-0 left-0 bg-zinc-900 text-white h-full  transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform lg:translate-x-0 lg:static lg:w-[30vh] w-[20vh] sm:w-[30vh] lg:h-full lg:fixed flex flex-col items-center gap-[2vh] border-r-[1px] border-zinc-500 z-40`}>

                    <img className='rounded-full h-[20vh] w-[20vh] mt-[4vh]'  src='https://cdn.dribbble.com/users/3912043/screenshots/15415864/media/26940ea0b1b406d3ce27f7455f474262.jpg?resize=1000x750&vertical=center'></img>


                    <a href='/home' 
                    className={`px-[4vh] py-2 mt-[6vh] rounded-[9vh]
                    flex items-center gap-[2vh] 
                    hover:bg-zinc-700 
                    ${currentPath === '/home' ? ' bg-zinc-700' : ''}`}>

                        <TiHome size={"4vh"} />
                        <h1 className={`text-[22px]`}>Home</h1>
                    </a>

                    {/*<a href='/home' className="block py-2 pl-4 flex items-center gap-[2vh]  hover:bg-zinc-700 rounded-[9vh]">
                        <LuSearch size={"4vh"}/>
                        <h1 className='text-[22px]'>Explore</h1>
                    </a>*/}

                    <a href='/profile'
                    className={`py-2 px-[4vh] rounded-[9vh]
                    flex items-center gap-[2vh] 
                    hover:bg-zinc-700 
                    ${currentPath === '/profile' ? ' bg-zinc-700' : ''}`}>

                        <LuUserCircle size={"4vh"} />
                        <h1 className={`text-[22px]`}>Profile</h1>

                    </a>
                    <a href='/home' className="block py-2 px-[4vh] flex items-center gap-[2vh]  hover:bg-zinc-700 rounded-[9vh]">
                        <BsBookmark size={"4vh"} />
                        <h1 className={`text-[22px] ${currentPath === '/saved' ? 'border-b-[1px] border-zinc-300' : ''}`}>Saved</h1>
                    </a>
                    <a href='/home' className="block py-2 px-[4vh] flex items-center gap-[2vh]  hover:bg-zinc-700 rounded-[9vh]">
                        <FaInfoCircle size={"4vh"} />
                        <h1 className={`text-[22px] ${currentPath === '/about' ? 'border-b-[1px] border-zinc-300' : ''}`}>About</h1>
                    </a>
                    <a href='/home' className="block py-2 px-[4vh] flex items-center gap-[2vh]  hover:bg-zinc-700 rounded-[9vh]">
                        <TiHome size={"4vh"} />
                        <h1 className={`text-[22px] ${currentPath === '/contact' ? 'border-b-[1px] border-zinc-300' : ''}`}>Contact</h1>
                    </a>
                    <a href='/signup' className="block py-2 px-[4vh] flex items-center gap-[2vh]  hover:bg-zinc-700 rounded-[9vh]">
                        <IoLogOutOutline size={"4vh"} />
                        <h1 className='text-[22px]'>Log Out</h1>
                    </a>
                </div>
            </div>

        )
}

