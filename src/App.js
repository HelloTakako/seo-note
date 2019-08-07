import React from 'react';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';


import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HomePage />
      </main>
    </div>
  );
}

export default App;
