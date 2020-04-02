import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home.js';
import TrackingPage from './pages/Tracking.js';
import AboutPage from './pages/About.js';
import CommunityPage from './pages/Community.js';
import {Route, Link} from 'react-router-dom';
import NavBar from "./components/NavBar.js";


function App() {
  return (
    <div className="App">
    <NavBar/>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/tracking" component={TrackingPage} />
    <Route exact path="/about" component={AboutPage} />
    <Route exact path="/community" component={CommunityPage} />
    </div>
  );
}

export default App;
