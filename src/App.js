import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import LinksPage from './pages/links/links.component';
import RobotsTxt from './pages/robots-txt/robots-txt.component';
import HtaccessPage from './pages/htaccess/htaccess.component';

import Hook from './pages/hook/hook.component';

import Footer from './components/footer/footer.component';


import './App.css';

function App() {
  return (
    <Router>
        <Header />
        <main>
        <Route exact path="/seo/" component={HomePage} />
        <Route path="/seo/links/" component={LinksPage} />
        <Route path="/seo/robots-txt/" component={RobotsTxt} />
        <Route path="/seo/htaccess/" component={HtaccessPage} />
        <Route path="/seo/hook/" component={Hook} />
        </main>
        <Footer />
      </Router>
  );
}

export default App;
