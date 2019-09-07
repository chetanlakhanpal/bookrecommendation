import React from 'react'
import { Link } from "react-router-dom";


const Header = (props) => {
    return (
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <Link to="/" className="navbar-brand col-sm-3 col-md-2 mr-0">Book Recommendation</Link>  
        <ul className="navbar-nav mr-auto">
            {props.loggedInUser.email && (
                <React.Fragment>
                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                    {props.loggedInUser.type !== 'USER' && (
                        <Link to="/book/create" className="nav-link">Add Book</Link>
                    )}
                    <Link to="/logout" className="nav-link">Logout</Link>
                </React.Fragment>
            )}
            {!props.loggedInUser.email && (
                <React.Fragment>
                    <Link to="/login" className="nav-link">Login</Link>
                    <Link to="/register" className="nav-link">Register</Link>
                </React.Fragment>
            )}
        </ul>
    </nav>
    )
}

export default Header