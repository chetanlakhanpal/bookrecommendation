import React from 'react'
import { Link } from "react-router-dom";

const Header = (props) => (
    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <Link to="/" className="navbar-brand col-sm-3 col-md-2 mr-0">Book Recommendation</Link>  
        <ul className="navbar-nav mr-auto">
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
        </ul>
    </nav>
);

export default Header