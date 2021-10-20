import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';


const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <div className="header">

            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/doctors">Doctors</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/About">About</NavLink>
                {user.email ?
                    <button onClick={logOut}>Log Out</button>
                    : <NavLink to="/login">Login</NavLink>}
            </nav>

        </div>
    );
};

export default Header;