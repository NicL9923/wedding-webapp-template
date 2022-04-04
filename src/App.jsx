import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from './Firebase.js';

import Home from './components/Home';
import WeddingDetails from './components/WeddingDetails';
import AboutUs from './components/AboutUs';
// import WeddingRegistry from './components/WeddingRegistry';
import SongRequests from './components/SongRequests';
import RSVP from './components/RSVP';
import Admin from './components/Admin';
import DJ from './components/DJ';
import PageNotFound from './components/PageNotFound';

import './styles/styles.css';
import { useEffect } from 'react';

export const REGISTRY_LINK = 'https://www.amazon.com/wedding/nicolas-layne-kimberly-mexicano-spring-april-2022/registry/1VA33F3IWJAJN';

const App = () => {
  const anonymousAuth = () => {
    firebase.auth().signInAnonymously().catch(error => {
      console.log(error);
    });    
  };

  useEffect(anonymousAuth, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/weddingdetails" component={WeddingDetails}/>
          <Route path="/aboutus" component={AboutUs}/>
          {/* <Route path="/weddingregistry" component={WeddingRegistry}/> */}
          <Route path="/songrequests" component={SongRequests}/>
          <Route path="/rsvp" component={RSVP}/>
          <Route path="/admin" component={Admin}/>
          <Route path="/dj" component={DJ}/>
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
