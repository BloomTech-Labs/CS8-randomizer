import React, { Component } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SideBar from './navigation/SideBar';
import TopBar from './navigation/TopBar';
import { Landing } from "./components";
import { MagicRandomizer } from "./components";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <TopBar className="TopBar" />
        <SideBar className="SideBar" />
        <Route exact path={'/'} render={() => <Landing />} />
        <Route exact path={'/magic-randomizer'} render={() => <MagicRandomizer />} />
        <Route exact path={'/create'} />
        <Route exact path={'/edit'} />
        <Route exact path={'/classlist'} />
        <Route exact path={'/billing'} />
        <Route exact path={'/settings'} />
      </div>
      </Router>
    );
  }
}

export default App;
