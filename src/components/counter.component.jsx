import React from 'react';

import './counter.styles.scss';

const Counter = () => (
        <div>
        <p>
            For...<br />
            meta title: 50-60(max.75)<br />
            meta description: 135-160
        </p>
        <div>
            <textarea rows="8" cols="50" id="string"></textarea>
            <button id="submit">Count</button>
        </div>

        <span id="count">0</span>
        </div>
        );

export default Counter;