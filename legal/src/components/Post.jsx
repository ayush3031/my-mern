
import React, { useEffect, useRef, useState } from 'react';
import { BiUpvote } from "react-icons/bi";
import { FaCommentAlt } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { BiSolidUpvote } from "react-icons/bi";


const Post = () => {


    const myRef = useRef(null);
    useEffect(() => {
        myRef.current.addEventListener('click', handleLiked);
        
    })

    /*const myRef2 = useRef(null);
    useEffect(() => {
        myRef2.current.addEventListener('click', handleSaved);
        return () => {
            myRef2.current.removeEventListener('click', handleSaved);
        }
    })*/

    function handleLiked() {
        toggleLiked(!isLiked);
    }
    function handleSaved() {
        toggleSaved(!isSaved);
    }
    const [isLiked, toggleLiked] = useState(false);
    const [isSaved, toggleSaved] = useState(false);

    const [showComments, setShowComments] = useState(false);

    const handleCommentClick = () => {
        setShowComments(!showComments);
    };
    return (
        <div className="max-w-xl mx-auto p-4 text-zinc-100 shadow-md rounded-md mb-4 bg-zinc-900">
            <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                    <img
                        className="h-10 w-10 rounded-full"
                        src={`https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg`}

                    />
                </div>
                <div className="ml-3">
                    <div className="text-sm font-medium text-zinc-100">John</div>
                    <div className="text-sm text-gray-300">@jey | 14  July | 2024 </div>
                </div>
            </div>
            {/*postImage && (*/}
            <div className="mb-4">
                <img src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="Post" className="w-full rounded-md" />
            </div>
            {/*)}*/}
            {/*caption && (*/}
            <div className="mb-4 pb-4 text-zinc-100 border-b-[1px] border-zinc-200">
                hey all
            </div>
            {/*)}*/}
            <div className="flex items-center justify-around text-gray-200 ">
                <button ref={myRef}
                    className="flex items-center space-x-1 hover:text-blue-500 transition duration-200 "
                >
                    {!isLiked ? <BiUpvote className="text-xl" /> : <BiSolidUpvote className="text-xl" />}
                    <span className='text-zinc-200 text-[17px]'>25</span>
                </button>
                <button onClick={handleCommentClick}
                    className="flex items-center space-x-1 hover:text-blue-500 transition duration-200"
                >
                    <FaCommentAlt className="text-l" />
                    <span className='text-zinc-200 text-[17px]'> 26</span>
                </button>
                <button
                    //ref={myRef2}
                    className="flex items-center space-x-1 hover:text-blue-500 transition duration-200"
                >
                    <FaBookmark />
                </button>
            </div>
            {showComments && (
                
                <div className="mt-4">
                    <textarea
                        className="w-full p-2 border border-gray-300 rounded-md text-zinc-800"
                        placeholder="Add a comment..."
                    />
                    <button
                        //onClick={onComment}
                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Comment
                    </button>
                </div>
            )}
        </div>
    );
};

export default Post;
