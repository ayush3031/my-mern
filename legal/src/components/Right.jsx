import React from 'react'
import { useState } from 'react';


export default function Right() {


    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='border-l-[1px] border-zinc-500 lg:w-[49vh]'>
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
                    <img className='rounded-[70px] h-[20vh] w-[20vh] ' src='https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'></img>
                    <h1 className='text-[3vh] font-light'>John Jame</h1>
                </a>
                <div>
                    <button className='bg-[#1A8CD8] py-[2vh] px-[5vh] rounded-full'>Ask Question</button>
                </div>
                
            </div>
        </div>

    )
}