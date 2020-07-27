import React from 'react';
import { Router } from "@reach/router";
import HomePage from './pages/Home';
import InfoPage from './pages/Info';

import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Menu/>
      <div>
        <Router>
          <HomePage hide={true} path="/" />
          <InfoPage path="information" />
        </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
