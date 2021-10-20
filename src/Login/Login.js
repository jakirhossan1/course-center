import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import "./Login.css";

const Login = () => {
    const { signInUsingGoogle } = useFirebase();
    return (
        <div className="login-form">
            <div>
                <h1>Login</h1>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email"></input>
                    <br></br>
                    <input type="password" name="" id="" placeholder="Your Password"></input>
                    <br></br>
                    <input className="submit-btn" type="submit" value="Submit"></input>


                </form>
                <Link to="register">Create Account</Link>
                <div>--------or-------</div>
                <button className="google-sign" onClick={signInUsingGoogle}>Google Sign In</button>
            </div>

        </div>
    );
};

export default Login;
