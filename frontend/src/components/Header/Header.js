import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div>
            <header>
                <Link to="/Home">ExetasAI</Link>
                <div class="spacer"></div>
                <div class="nav-links">
                    {/* <Link to="/HowToUse">How to use</Link> */}
                    <Link to="/Generate">Prompt Generator</Link>
                    <Link to="/Grade">Grader</Link>
                    <Link to="/About">About</Link>
                    {/* <Link to="/Donate">Donate</Link> */}
                </div>
                <div class="signInButton">
                    <Link to="/SignIn">Sign in</Link>
                </div>
               
            </header>
        </div>
    )
}


export default Header;