import React, { useRef, useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Signup() {
    const navigate = useNavigate();
    const myRef = useRef(null);
    const [isSignUp, toggleSignUp] = useState(true);
    useEffect(() => {
        if(myRef.current)
        {
            myRef.current.addEventListener('click', handleClick); 
        }
        return () => {
            if(myRef.current)
            myRef.current.removeEventListener('click', handleClick);
        };
        
    },[isSignUp]);

    function handleClick() {
        toggleSignUp(!isSignUp);
    }
    

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if(isSignUp)
        {
            const formData = {
                name: e.target.name.value,
                username: e.target.username?.value,
                email: e.target.email.value,
                password: e.target.password.value,
            };
            try {
                //console.log(formData);
                const response = await axios.post('https://my-mern-1.onrender.com/signup', formData, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true
                });
                alert('Signup successful');
                console.log('Signup successful:', response.data);
                navigate('/home');
                // Handle success, e.g., redirect to another page or show success message
            } catch (error) {
                //alert("Couldn't signup!",response.message);
                console.error('Signup failed:', error.message);
                // Handle error, e.g., show error message
            }
        }
        else
        {
            const formData = {
                email: e.target.email.value,
                password: e.target.password.value,
            };
            //console.log(formData);
            try {
                console.log(formData);
                const response = await axios.post('https://my-mern-1.onrender.com/login', formData, {
                    headers: {
                        'Content-Type': 'application/json'},
                    withCredentials: true
                });
                alert('Login successful');
                //console.log(response.config.headers.Cookie);
                console.log('Login successful:', response.data);
                navigate('/home');
                // Handle success, e.g., redirect to another page or show success message
            } catch (error) {
                //alert("Couldn't signup!",response.message);
                console.error('Login failed:', error.message);
                // Handle error, e.g., show error message
            }
        }
        
    };

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
                        <h1 className='text-[10vh] font-["Showcard_Gothic"] leading-none'>{isSignUp ? <p>Sign Up</p> : <p>Sign In</p>}</h1>

                        <form onSubmit={handleFormSubmit}>
                            {isSignUp ? <div> <h1 className='text-[3vh] font-semibold mt-[4vh]'>Name</h1>
                                <input 
                                    className='w-[39vh] rounded-md p-[1vh]' type='text' 
                                    name='name'
                                    placeholder='name'>
                                </input></div> : <p></p>}

                            {isSignUp ? <div> <h1 className='text-[3vh] font-semibold mt-[4vh]'>UserName</h1>
                                <input 
                                    className='w-[39vh] rounded-md p-[1vh]' type='text' 
                                    name='username'
                                    placeholder='username'>
                                </input></div> : <p></p>}

                            <h1 className='text-[3vh] font-semibold mt-[1vh]'>E-mail id</h1>
                                <input
                                    className='w-[39vh] rounded-md p-[1vh] mb-[1vh]' 
                                    type='e-mail'
                                    name='email' 
                                    placeholder='e-mail'>    
                                </input>

                            <h1 className='text-[3vh] font-semibold mt-[1vh]'>Password</h1>
                                <input
                                    className='w-[39vh] rounded-md p-[1vh] mb-[1vh]' 
                                    type='password' 
                                    name='password'
                                    placeholder='password'>
                                </input>
                            <h1 ref={myRef} className='font-light cursor-pointer mt-[1vh]'>{isSignUp ? <p>Already have an account? Sign In!</p> : <p className='flex justify-center'>Create New Account?</p>}</h1>
                            <button type="submit" className='bg-zinc-800 text-white py-[2vh] px-[3vh] rounded-full mt-[2vh] mb-[8vh]'>{isSignUp ? <p>Create Account</p> : <p>Log In</p>}</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='w-full h-[15vh] bg-zinc-300'>
            </div>
        </div>
    )
}

