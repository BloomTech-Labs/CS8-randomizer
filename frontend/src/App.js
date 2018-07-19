import React, { Component } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SideBar from './navigation/SideBar';
import LogOut from './navigation/LogOut';
// import TopBar from './navigation/TopBar';
import { Landing, MagicRandomizer, Setup, ClassList, About, SignUp, LogIn, ClassForm } from "./components";
import Breadcrumbs from 'react-router-dynamic-breadcrumbs';

import './App.css';
import Settings from './components/Settings';
import Billing from './components/Billing';

// Breadcrumb Routes
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
      isAuth: true,
      }
    }

  // Placeholder test for showing navbars on login
  test(e) {
    e.preventDefault();
    this.setState({
      isAuth: !this.state.isAuth,
      // condition: !this.state.condition

    })
  }

  componentDidMount(){
    console.log('Mounted...')
    this.setState({isAuth: false} )
  }

  render() {

    // TODO: Setup to work with real authentication

    // Hides navbar when not logged in
    // let loggedSide = this.state.isAuth ? <SideBar /> : '';
    // let loggedOut = this.state.isAuth ? <LogOut className='Logout'/> : '';
    // let logTest = this.state.isAuth ? '' : <button onClick={this.test} />;

    return (
      <Router>
      <div className="App">
        <TopBar className="TopBar" />
        <SideBar className="SideBar" />
        <Route exact path={'/'} render={() => <Landing />} />
        <Route exact path={'/magic-randomizer'} render={() => <MagicRandomizer />} />
        <Route exact path={'/Settings'} render={() => <Settings />} />
        <Route exact path={'/Billing'} render={() => <Billing />} />

      </div>
      </Router>
    );
  }
}


export default App;
