import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa'; 

const ProfilePage = (props) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [bio, setBio] = useState('');
    const [editingBio, setEditingBio] = useState(false);
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [update , doUpdate] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                
                const response = await axios.get(`https://my-mern-1.onrender.com/users/profile`,{withCredentials:true});
                
                setUserData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUserData();
    },[doUpdate]);

    if (loading) {
        return <p>Loading...</p>;
    }

    const handleBioChange = (e) => {
        setBio(e.target.value);
    };

    const toggleEditBio = () => {
        setEditingBio(!editingBio);
    };

    const saveBio = async () => {
        try {
            const response = await axios.patch(
                'https://my-mern-1.onrender.com/users/profile/bio',
                { bio },
                { withCredentials: true }
            );
            setEditingBio(false);
            setBio(bio);
        } catch (error) {
            console.error('Error updating bio:', error);
        }
    };


    const handleFileUpload = async (e) => {
        const image = e.target.files[0];
        const formData = {
            image,
        }
        console.log(image);
        try {
            const response = await axios.patch(
                'https://my-mern-1.onrender.com/users/profile/changeDp',
                formData,
                { 
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true }
            );
            setProfilePhoto(response.data.image);
            alert('Profile Photo Updated!');
            doUpdate(!update);
        } catch (error) {
            console.error('Error uploading profile photo:', error);
        }
    };

    

    return (
        <div className="flex flex-col items-center mt-4  p-4">
        <div className="w-full lg:w-3/5 bg-zinc-300 p-4 rounded-lg shadow-md">
            <div className="flex flex-col items-center">
                <div className='flex items-center gap-[3vh]'>
                    <img
                        src={`${userData.profilePicture}` || 'https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png'}
                        alt="Profile"
                        className="rounded-full w-32 h-32"
                    />
                    <div className=" p-2 bg-gray-800 rounded-full cursor-pointer">
                            <label htmlFor="fileUpload">
                                <FaPencilAlt className="text-gray-300" />
                            </label>
                            <input
                                id="fileUpload"
                                type="file"
                                className="hidden"
                                onChange={handleFileUpload}
                            />
                    </div>

                </div>
                <div className='flex items-center gap-[10px]'>
                    <p className="text-2xl font-semibold">{userData.name}</p>
                    <p className="text-gray-600 ">@{userData.username}</p>
                </div>

                <div>{userData.bio}</div>
                {editingBio ? (
                        <div className="mb-4">
                            <textarea
                                value={bio}
                                onChange={handleBioChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Enter your bio..."
                            />
                            <div className="flex justify-end mt-2">
                                <button
                                    onClick={saveBio}
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 mr-2"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={toggleEditBio}
                                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-200"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="mb-4">
                            <p className="text-center text-gray-800">{bio}</p>
                            <button
                                onClick={toggleEditBio}
                                className="text-blue-500 hover:underline cursor-pointer"
                            >
                                Edit Bio
                            </button>
                        </div>
                    )}
                <div className="mb-4">
                        <p><strong>Joined:</strong> {new Date(userData.createdAt).toLocaleDateString()}</p>
                    </div>
                    
                <div className="flex justify-around w-full mb-4">
                    <div className="text-center">
                        <h3 className="text-lg font-semibold">{props.noOfPosts}</h3>
                        <p className="text-gray-600">Posts</p>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                
            </div>
        </div>
    </div>
    );
};

export default ProfilePage;
