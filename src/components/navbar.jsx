import React from 'react';
import { Link } from 'react-router-dom'; 

function Navbar() {
    return (
        <div className="site-header-nav-container animated-background-home">
            <header className="site-header">
                <h1>Access 'Grant'ed</h1>
            </header>
            <nav id="master-nav">
                <ul id="master-list">
                    <li className="master-li"><Link to="/">Home</Link></li>
                    <li className="master-li"><Link to="/projects">Projects</Link></li>
                    <li className="master-li"><Link to="/aboutme">About Me</Link></li>
                    <li className="master-li"><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
