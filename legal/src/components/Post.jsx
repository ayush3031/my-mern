
import React, { useEffect, useRef, useState } from 'react';
import { BiUpvote } from "react-icons/bi";
import { FaCommentAlt } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { BiSolidUpvote } from "react-icons/bi";
import { CiBookmark } from "react-icons/ci";
import axios from 'axios';
import { useNavigate } from 'react-router';

const Post = (props) => {

    //req prop
    const postId = props.id;

    //saved
    
    const myRef2 = useRef(null);
    useEffect(() => {
        if (myRef2.current) {
            myRef2.current.addEventListener('click', handleSaved);
        }
    }, [myRef2, handleSaved]);

    
    function handleSaved() {
        toggleSaved(!isSaved);
    }
    
    const [isSaved, toggleSaved] = useState(false);

    //likes

    const [isLiked, toggleLiked] = useState(false);
    const myRef = useRef(null);
    useEffect(() => {
        if (myRef.current) {
            myRef.current.addEventListener('click', handleLiked);
        }
    }, [myRef, handleLiked]);
    function handleLiked() {
        toggleLiked(!isLiked);
    }

    //comments 

    const [newComment, setNewComment] = useState('');

    const [showComments, setShowComments] = useState(false);
    const [allComments, setAllComments] = useState([]);

    const [loading, setLoading] = useState(false);
    
    const handleNewComment = (e) => {
        setNewComment(e.target.value);
    }

    const handleCommentClick = () => {
        setShowComments(!showComments);
    };
    
    useEffect(() => {
        if (showComments) {
            fetchComments();
        }
    }, [showComments]);

    const fetchComments = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:5000/home/posts/${postId}`, { withCredentials: true });
            setAllComments(response.data);
            setLoading(false);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching comments:', error);
            setLoading(false);
        }
    };

    const handleAddComment = async () => {
        try {
            const response = await axios.post(`http://localhost:5000/home/posts/${postId}`, { content: newComment }, { withCredentials: true });
            setShowComments(!showComments);
            setNewComment('');
        }
        catch (err) {
            console.error('Error adding comments:', err);
        }
    }

    //date-->

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        //console.log(date);
        const day = date.getDate();
        const month = date.toLocaleString('en-US', { month: 'long' });
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
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
                    <div className="text-sm font-medium text-zinc-100">{props.name}</div>
                    <div className="text-sm text-gray-300">@{props.username} | {formatDate(props.date)} </div>
                </div>
            </div>
            {props.image && (
                <div className="mb-4">
                    <img src={`${props.image}`} alt="Post" className="w-full rounded-md" />
                </div>
            )}
            {props.content && (
                <div className="mb-4 pb-4 text-zinc-100 border-b-[1px] border-zinc-200">
                    {props.content}
                </div>
            )}
            <div className="flex items-center justify-around text-gray-200 ">
                <button ref={myRef}
                    className="flex items-center space-x-1 hover:text-blue-500 transition duration-200 "
                >
                    {!isLiked ? <BiUpvote className="text-xl" /> : <BiSolidUpvote className="text-xl" />}
                    <span className='text-zinc-200 text-[17px]'>{props.likes.length}</span>
                </button>
                <button onClick={handleCommentClick}
                    className="flex items-center space-x-1 hover:text-blue-500 transition duration-200"
                >
                    <FaCommentAlt className="text-l" />
                    <span className='text-zinc-200 text-[17px]'> {props.comments.length}</span>
                </button>
                <button
                    ref={myRef2}
                    className="flex items-center space-x-1 hover:text-blue-500 transition duration-200"
                >
                    {!isSaved ? <CiBookmark className='text-xl' /> : <FaBookmark className='text-xl' />}
                </button>
            </div>
            {showComments && (
                <div className="mt-4">
                    {loading ? (
                        <p className="text-gray-600">Loading comments...</p>
                    ) : (
                        <div className='my-[24px]'>
                            <h1 className='font-bold'>Replies</h1>
                            <ul >
                            {allComments.map((comment) => (
                                <li key={comment._id} className="bg-zinc-800 my-4 p-4 rounded-[20px] shadow-md
                                border-l-[0.05rem] border-b-[1px] 
                                border-zinc-200'">
                                    <p className="font-light">@{comment.user}</p>
                                    <p className="text-gray-200 font-semibold">{comment.text}</p>
                                </li>
                            ))}
                        </ul>
                        </div>
                    )}
                    <textarea
                        className="w-full p-2 border border-gray-300 rounded-md text-zinc-800"
                        name='content'
                        value={newComment}
                        onChange={handleNewComment}
                        placeholder="Add a comment..."
                    />
                    <button
                        onClick={handleAddComment}
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
