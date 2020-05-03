import React from 'react';
import { Router} from "@reach/router";
import HomePage from './pages/Home';
import InfoPage from './pages/Info';
import Rsvp from './pages/Rsvp';

import Header from './components/Header';
import Menu from './components/Menu';
import Container from './components/Container';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Menu/>
      <Container>
        <Router>
          <HomePage hide={true} path="/" />
          <InfoPage path="information" />
          <Rsvp path="rsvp" />
        </Router>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
