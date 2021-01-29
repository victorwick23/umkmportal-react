import React from 'react';
import './App.css';
import Navigationbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HeroSection from './components/HeroSection';
import FooterSection from './components/FooterSection';
import Content from './components/Content';

function App() {
  return (
    <>
    <Router>
        <Navigationbar/>
        <HeroSection/>
        <Content/>
        <FooterSection/>
        <Switch>
          <Route path='/' exact />
        </Switch>
    </Router>
    </>
  );
}

export default App;
