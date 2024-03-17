import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">

                <div className="footer-section company-name">
                    <Link to="/Home"><h1>PrepAI</h1></Link>
                </div>

                <div className='rightSide'>

                    <div className="footer-section links">
                        <ul>
                            <Link to="/Generate">Prompt Generator</Link>
                            <Link to="/Grade">Grader</Link>
                            <Link to="/About">About</Link>
                            <Link to="/SignIn">Sign in</Link>
                        </ul>
                    </div>

                    <div>
                        <p>Privacy policy link here</p>
                        <p>Terms and conditions link here</p>
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default Footer;