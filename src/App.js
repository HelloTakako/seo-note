import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import LinksPage from './pages/links/links.component';
import Footer from './components/footer/footer.component';


import './App.css';

function App() {
  return (
    <Router>
        <Header />
        <main>
        <Route exact path="/" component={HomePage} />
        <Route path="/links/" component={LinksPage} />
        </main>
        <Footer />
      </Router>
  );
}

export default App;
