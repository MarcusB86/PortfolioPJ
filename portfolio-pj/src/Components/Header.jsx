import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header>
            <h1>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/320px-Star_Wars_Logo.svg.png"
                    alt="Star Wars Logo"
                    
                />
            </h1>
            <nav>
                
                    <li><Link to="/form">Characters</Link></li>
                
            </nav>
        </header>
    );
};

export default Header;
