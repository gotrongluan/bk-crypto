import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import RoutesConfig from 'configs/route.config';
import { toRoute } from 'utils/route';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />   
        <Switch>
          {RoutesConfig.map(route => toRoute(route))}
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
