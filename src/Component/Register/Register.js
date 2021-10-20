import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.css";

const Register = () => {
    return (
        <div>
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email"></input>
                    <br></br>
                    <input type="password" name="" id="" placeholder="Your Password"></input>
                    <br></br>
                    <input type="password" name="" id="" placeholder="Re Enter Password"></input>
                    <br></br>
                    <input className="submit-btn" type="submit" value="Submit"></input>
                </form>
                <p>Already have an account? <Link to="/login">Log-in</Link></p>
            </div>

        </div>
    );
};

export default Register;