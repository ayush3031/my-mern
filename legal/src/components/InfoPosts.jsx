import React from 'react'
import { useSelector } from 'react-redux'


export const InfoPosts = () => {
    const { user } = useSelector((state)=>state.user);
  return (
    <div>
        <div className="flex items-center mb-4">
            <div className="flex-shrink-0">
                <img
                    className="h-10 w-10 rounded-full"
                    src={user?.profilePicture || 'https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png'}
                />
            </div>
            <div className="ml-3">
                <div className="text-sm font-medium text-zinc-100">{props.name}</div>
                <div className="text-sm text-gray-300">@{props.username} | {formatDate(props.date)} </div>
            </div>
            {props.username==user?<div className='ml-auto'>
                <MdDelete className='text-[25px]' />
            </div>:<></>}
        </div>
    </div>
  )
}
