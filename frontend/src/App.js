import React, { Component } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SideBar from './navigation/SideBar';
import LogOut from './navigation/LogOut';
// import TopBar from './navigation/TopBar';
import { Landing } from "./components";
import { MagicRandomizer } from "./components";
import Breadcrumbs from 'react-router-dynamic-breadcrumbs';   

import './App.css';

const routes = {
  '/': 'Home',
  '/classes': 'Classes',
  '/classes/:c_id': ':c_id',
  '/classes/magicrandomizer': 'Game',
  '/classes/edit': 'Edit Class',
  '/classes/create': 'Create Class',
  '/billing': 'Billing',
  '/settings': 'Settings'
}

class App extends Component {

  constructor(){
    super();
    this.test = this.test.bind(this);
    this.state={
      isAuth: false
      }
    }
  
  test() {
    this.setState({
      isAuth: !this.state.isAuth
    })
  }

  render() {

    // Hides navbar when not logged in
    let loggedSide = this.state.isAuth ? <SideBar /> : '';
    let loggedOut = this.state.isAuth ? <LogOut className='Logout'/> : '';
    let logTest = this.state.isAuth ? '' : <button onClick={this.test} />;
 
    return (
      <Router>
      <div className="App">
        <div className='LogBar'>
          {/* <LogOut className='Logout' /> */}
          {loggedOut}
        </div>
        <div className='CrumbBar'>
          <Breadcrumbs id="Crumb" mappedRoutes={routes} />
        </div>
        {loggedSide}
        {logTest}
        <div>
          <Route exact path={'/'} render={() => <Landing />} />
          <Route exact path={'/home'} />
          <Route exact path={'/magic-randomizer'} render={() => <MagicRandomizer />} />
          <Route exact path={'/create'} />
          <Route exact path={'/edit'} />
          <Route exact path={'/classlist'} />
          <Route exact path={'/billing'} />
          <Route exact path={'/settings'} />
        </div>
      </div>
      </Router>
    );
  }
}


export default App;
