import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div className='header' >
            <nav>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/product'>Product</NavLink>
                <NavLink to='/friend'>Friend</NavLink>
                <NavLink to='/post'>Post</NavLink>
            </nav>
            <p>Common header</p>
        </div>
    );
};

export default Header;