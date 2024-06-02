import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {

    return (
        <header className="header">
            <div className="header-content">
                <h1>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" 
                        alt="Star Wars Logo"
                        className="logo"
                    />
                </h1>
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/form">Characters</Link></li>
                        <li><Link to="/about">About Me</Link></li>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
