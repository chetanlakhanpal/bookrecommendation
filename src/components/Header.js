import React from 'react'

const Header = () => (
    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="">Book Recommendation</a>
        
        <ul className="navbar-nav px-3 text-right">
            <li className="nav-item text-nowrap">
                <a className="nav-link" href="#">Sign out</a>
            </li>
        </ul>
    </nav>
);

export default Header