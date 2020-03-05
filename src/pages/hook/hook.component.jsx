import React from 'react';

import config from '../../config';




function Hook() {
  // Declare a new state variable, which we'll call "count"
  const configKey = config;

  return (
    <div>
        <input name="word_input"></input>
        <button id="submit_button">Look Up</button>
        
        <p>{configKey.id} {configKey.strings}</p>
    </div>
  );
}

export default Hook;

