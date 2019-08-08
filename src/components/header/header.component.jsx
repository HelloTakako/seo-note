import React from 'react';
import { Link } from "react-router-dom";

import './header.styles.scss';

const Header = () => (
        <header>
            <h1>SEO Note</h1>
            <nav>
                <ul>
                    <li><Link to="/seo/">Meta tags</Link></li>
                    <li><Link to="/seo/robots-txt/">robots.txt</Link></li>
                    <li><Link to="/seo/htaccess/">.htaccess</Link></li>
                    <li><Link to="/seo/links/">Useful Links</Link></li>
                </ul>
            </nav>
        </header>
);

export default Header;