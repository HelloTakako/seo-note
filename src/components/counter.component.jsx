import React from 'react';

import './counter.styles.scss';

const Counter = () => {
    function count(e){
        e.preventDefault();
        const count = document.getElementById('count');
        const string = document.getElementById('string');

        count.innerText = string.value.length;
        ;
    }
    return(
        <div>
        <p>
            For...<br />
            meta title: 50-60(max.75)<br />
            meta description: 135-160
        </p>
        <div>
            <textarea rows="8" cols="50" id="string"></textarea>
            <button id="submit" onClick={count}>Count</button>
        </div>

        <span id="count">0</span>
        </div>
        )
    };

export default Counter;