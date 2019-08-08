import React from 'react';
import { Link } from "react-router-dom";

import './header.styles.scss';

const Header = () => (
        <header>
            <h1>SEO Note</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/links/">Useful Links</Link></li>
                </ul>
            </nav>
        </header>
);

export default Header;