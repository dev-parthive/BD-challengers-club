import React from 'react';
import logo from '../../Images/dumbbell.png'
import './Header.css'
const Header = () => {
    return (
        <div>
           <nav className='nav-section'>
            <img className='logo-images' src={logo} alt="" />
            <h1 className='heading'>BD Challengers Club</h1>
           </nav>
        </div>
    );
};

export default Header;