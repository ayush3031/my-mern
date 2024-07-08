import React from 'react'

export default function Signup() {
    return (
        <div className='bg-zinc-300'>
            <div className='w-full h-[13vh] bg-zinc-300'>
            </div>
            <div className='w-full h-screen bg-zinc-300 flex items-center justify-center'>
                <div className='m-[8vh] flex items-center flex-wrap gap-[8vh]'>
                    <div className='flex flex-col '>
                        <h1 className='text-[8vh] font-["Impact"]  tracking-[.001rem]'>Join Now!</h1>
                        <img className='h-[30vh] w-[30vh]' src='https://cdn.dribbble.com/users/3912043/screenshots/15415864/media/26940ea0b1b406d3ce27f7455f474262.jpg'></img>
                    </div>
                    <div className=' flex flex-col '>
                        <h1 className='text-[10vh] font-["Showcard_Gothic"] leading-none'>Sign Up</h1>
                        <h1 className='text-[3vh] font-semibold mt-[4vh]'>UserName</h1>
                        <input className='w-[39vh] rounded-md p-[1vh]' type='text' placeholder='name'></input>
                        <h1 className='text-[3vh] font-semibold mt-[1vh]'>E-mail id</h1>
                        <input className='w-[39vh] rounded-md p-[1vh] mb-[1vh]' type='text' placeholder='e-mail'></input>
                        <h1 className='font-light cursor-pointer mt-[1vh]'>Already have an account? Sign In!</h1>
                        <button className='bg-zinc-800 text-white py-[2vh] px-[3vh] rounded-full mt-[2vh] mb-[8vh]'>Create Account</button>
                    </div>
                </div>
            </div>
            <div className='w-full h-[11vh] bg-zinc-300'>
            </div>
        </div>
    )
}

