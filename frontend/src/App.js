import React, { Component } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SideBar from './navigation/SideBar';
import LogOut from './navigation/LogOut';
// import TopBar from './navigation/TopBar';
import { Landing, MagicRandomizer, Setup, ClassList } from "./components";
import Breadcrumbs from 'react-router-dynamic-breadcrumbs';   
import TopBar from './navigation/TopBar';
// import { Landing } from "./components";
// import { MagicRandomizer } from "./components";
// import { AddClass } from "./components";
import { Settings } from "./components";
import { About } from "./components";
import { SignUp } from "./components";
import { LogIn } from "./components";

import './App.css';

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
        <div className='LogBar'>
          {/* {loggedOut} */}

          <LogOut className='Logout' />

          {/* Logbar */}
        </div>
        <div className='CrumbBar'>
          <Breadcrumbs id="Crumb" mappedRoutes={routes} />
          {/* CrumBar */}
        </div>

        {/* Hideable sidebar and Auth test button */}
          {/* {loggedSide}
          {logTest} */}

          <SideBar />

        {/* <div className={this.state.isAuth ? 'LandingComponentHidden' : 'LandingComponent'} >
          <Route exact path={'/'} render={() => <Landing />} />
         Landing Component 
        </div> */}

        <div className={this.state.isAuth ? 'MainAppComponents' : 'MainComponentsHidden'} >
          <Route exact path={'/'} render={() => <Landing />} />
          <Route exact path={'/home'} />
          <Route exact path={'/magic-randomizer'} render={() => <MagicRandomizer />} />
          <Route exact path={'/create'} />
          <Route exact path={'/edit'} />
          <Route exact path={'/classes'} render={() => <ClassList />} />
        <Route exact path={'/Classes/active'} render={() => <MagicRandomizer />} />
          <Route exact path={'/billing'} />
          <Route exact path={'/settings'} render={() => <Setup />} />
          <Route exact path={'/about'} render={() => <About />} />
          <Route exact path={'/signup'} render={() => <SignUp />} />
          <Route exact path={'/login'} render={() => <LogIn />} />
          {/* MainAppComponents */}
        </div>
        {/*App*/}
      </div> 
        {/* <Route exact path={'/addClass'} render={() => <AddClass />} /> */}
        
      </Router>
    );
  }
}


export default App;
