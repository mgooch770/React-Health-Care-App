import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <ul>
            <li><Link to="/">HomePage</Link></li>
            <li><Link to="/tracking">TrackingPage</Link></li>
            <li><Link to="/community">CommunityPage</Link></li>
            <li><Link to="/about">AboutPage</Link></li>
        </ul>
    );
}

export default NavBar;