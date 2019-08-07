import React from 'react';

import './header.styles.scss';

const Header = () => (
    <div>
        <header>
            <h1>SEO Note</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/links">Useful Links</a></li>
                </ul>
            </nav>
        </header>
    </div>
);

export default Header;