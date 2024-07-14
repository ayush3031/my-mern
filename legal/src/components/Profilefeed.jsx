import React from 'react';

const ProfilePage = () => {
    return (
        <div className="flex flex-col items-center mt-4  p-4">
        <div className="w-full lg:w-3/5 bg-zinc-300 p-4 rounded-lg shadow-md">
            <div className="flex flex-col items-center">
                <img
                    src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                    alt="Profile"
                    className="rounded-full w-32 h-32 mb-4"
                />
                <h2 className="text-2xl font-semibold mb-2">User Name</h2>
                <p className="text-gray-600 mb-4">@username</p>
                <p className="text-center text-gray-800 mb-4">
                    This is a bio. It can span multiple lines and provides a brief description
                    about the user.
                </p>
                <div className="flex justify-around w-full mb-4">
                    <div className="text-center">
                        <h3 className="text-lg font-semibold">100</h3>
                        <p className="text-gray-600">Posts</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-lg font-semibold">200</h3>
                        <p className="text-gray-600">Followers</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-lg font-semibold">180</h3>
                        <p className="text-gray-600">Following</p>
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
