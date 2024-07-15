import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="top-0 left-[13vw] right-[13vw] flex items-center justify-between bg-zinc-900 text-white p-4 border-b-[1px] border-zinc-400 mb-[1px] z-[50]">
            <div className="flex items-center gap-[3vh]">
                <img src="https://cdn.dribbble.com/users/3912043/screenshots/15415864/media/26940ea0b1b406d3ce27f7455f474262.jpg?resize=1000x750&vertical=center" alt="Company Logo" className="h-10 mr-3" />
                <Link to="/home" className='text-[10vh]  font-["Niagara_Solid"]'>Legally Right</Link>
            </div>
        </nav>
    );
};

export default Navbar;
