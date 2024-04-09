// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dribbbleLogo3 from '../../assets/dribbleLogo3.png'
import bagWithXMark from '../../assets/bagWithXMark.png'
import { fas } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const { user } = useAuth()
    const navLinkStyle1 = 'text-gray-700 text-sm '
    const searchBar = <label className="input input-bordered flex items-center gap-2 max-w-[200px] pl-10 relative bg-gray-100">
        <input type="text" className="grow" placeholder="Search" />
        <span className=' absolute top-3 left-2 text-gray-500'>

            <FontAwesomeIcon icon={fas.faMagnifyingGlass} />
        </span>
    </label>
    const navLink = <>
        <li><a className={`${navLinkStyle1}`}>Inspiration</a></li>
        <li><a className={`${navLinkStyle1}`}>Find Work</a></li>
        <li><a className={`${navLinkStyle1}`}>Learn Design</a></li>
        <li><a className={`${navLinkStyle1}`}>Go Pro</a></li>
        <li><a className={`${navLinkStyle1}`}>Hire Designers</a></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100  px-5 lg:px-10">
                <div className="navbar-start  w-max">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                            <span className='block sm:hidden'> {searchBar}</span>
                        </ul>
                    </div>
                   <NavLink to={'/'}> <img className='w-20' src={dribbbleLogo3} alt="" /></NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end ml-auto space-x-5  w-full lg:w-max">
                   <span className='hidden sm:block'> {searchBar}</span>
                    <div className='w-6'>
                        <img className='w-full' src={bagWithXMark} alt="" />
                    </div>
                    <div className='w-12 h-12 rounded-full overflow-hidden'>
                        <img className='w-full h-full object-cover p-0.5 border border-gray-500 rounded-full' src={user?.photoURL} alt="" />
                    </div>
                    <a className="btn bg-primary text-white">Upload</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;