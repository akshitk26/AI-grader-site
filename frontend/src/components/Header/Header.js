import React from 'react';

function Header() {
    return (
        <div>
            <header>
                <Link to="/Home">Home</Link>
                <div class="spacer"></div>
                <div class="nav-links">
                    <Link to="/Generate">Generate</Link>
                    <Link to="/HowToUse">How to use</Link>
                    <Link to="/Donate">Donate</Link>
                </div>
            </header>
        </div>
    )
}

export default Header;