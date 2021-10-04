import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <div className="header">

            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/courses">Our Course</NavLink>
                <NavLink to="/teacher">Teacher</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/About">About</NavLink>
            </nav>

        </div>
    );
};

export default Header;