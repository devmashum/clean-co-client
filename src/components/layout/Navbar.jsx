import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="w-full navbar bg-base-300">
            <div className='w-full max-w-[1200px] mx-auto'>
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
                <div className="flex-1 px-2 mx-2">Clean Co.</div>
                <div className="flex-none hidden lg:block">
                    <div className='flex gap-3'>
                        <NavLink className={({ isActive }) => isActive ? 'btn btn-primary' : 'btn btn-ghost '} to={'/about'}>About</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'btn btn-primary' : 'btn btn-ghost '} to={'/contact'}>Contact</NavLink>

                        <NavLink className={({ isActive }) => isActive ? 'btn btn-primary' : 'btn btn-ghost'} to={'/login'}>Login</NavLink>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;