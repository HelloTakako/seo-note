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
        <div className='counter'>
            <div>
                <textarea rows="8" cols="50" id="string" onChange={count}></textarea>
            </div>

            <span id="count">0</span>
        </div>
        )
    };

export default Counter;