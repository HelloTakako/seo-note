import React, { useState } from 'react';

import config from '../../config';


function Hook() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount ] = useState(0);
  const configKey = config;

  return (
    <div>
      <p>{configKey.MY_KEY}</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Hook;

