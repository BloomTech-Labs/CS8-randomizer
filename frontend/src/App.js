import React, { Component } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SideBar from './navigation/SideBar';
import TopBar from './navigation/TopBar';
import { Landing } from "./components";
import { MagicRandomizer } from "./components";
// import { AddClass } from "./components";
import { Settings } from "./components";
import { About } from "./components";
import { SignUp } from "./components";
import { LogIn } from "./components";

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
        {/* <Route exact path={'/addClass'} render={() => <AddClass />} /> */}
        <Route exact path={'/settings'} render={() => <Settings />} />
        <Route exact path={'/about'} render={() => <About />} />
        <Route exact path={'/signup'} render={() => <SignUp />} />
        <Route exact path={'/login'} render={() => <LogIn />} />
      </div>
      </Router>
    );
  }
}

export default App;