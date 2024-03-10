import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <header>
                <Link to="/Home">Home</Link>
                <div class="spacer"></div>
                <div className="dropdown">
                <button className="dropbtn"><span>Use</span></button>
                    <div className="dropdown-content">
                        <Link to="/Generate">Generate</Link>
                        <Link to="/Grade">Grade</Link>
                    </div>
                </div>
                <div class="nav-links">
                    <Link to="/HowToUse">How to use</Link>
                    <Link to="/Donate">Donate</Link>
                </div>
                
            </header>
        </div>
    )
}

export default Header;