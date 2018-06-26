import React, { Component } from 'react';
import './App.css';
import {
  AboutPage,
  LandingPage,
  PortfolioPage
} from './components/pages';

import { ScrollTop } from './components/scroll';

class App extends Component {
  render() {
    return (
      <div className="landing-page">
        <LandingPage />
        <AboutPage />
        <PortfolioPage />
        <ScrollTop />
      </div>
    );
  }
}

export default App;
