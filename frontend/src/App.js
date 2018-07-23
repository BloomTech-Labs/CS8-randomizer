import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

<<<<<<< Updated upstream
import SideBar from "./navigation/SideBar";
import LogOut from "./navigation/LogOut";
=======
// import SideBar from './navigation/SideBar';
import DropBar from './navigation/SideBar/SideDrop';
import LogOut from './navigation/LogOut';
>>>>>>> Stashed changes
// import TopBar from './navigation/TopBar';
import {
  Landing,
  MagicRandomizer,
  Setup,
  ClassList,
  About,
  SignUp,
  LogIn,
  ClassForm
} from "./components";
import Breadcrumbs from "react-router-dynamic-breadcrumbs";
import "./App.css";
import Settings from "./components/Settings";
import Billing from "./components/Billing";

// Breadcrumb Routes
const routes = {
  "/": "Home",
  "/classes": "Classes",
  "/classes/:c_id": ":c_id",
  "/classes/magicrandomizer": "Game",
  "/classes/edit": "Edit Class",
  "/classes/create": "Create Class",
  "/billing": "Billing",
  "/settings": "Settings"
};

const currentPath = window.location.pathname;

class App extends Component {
  constructor() {
    super();
    this.test = this.test.bind(this);
    this.state = {
      isAuth: false,
      hideNav: true
    };
  }

  // Placeholder test for showing navbars on login
  test(e) {
    e.preventDefault();
    this.setState({
      isAuth: !this.state.isAuth
      // condition: !this.state.condition
    });
  }

  // navCheck(){
  //   if(currentPath == '/'){
  //     this.setState({
  //       hideNav: true
  //     })
  //   }
  //       else{
  //         this.setState({
  //           hideNav: false
  //         })
  //       }
  //   console.log(hideNav);
  // }

  componentDidMount() {
    console.log("Mounted...");
    console.log(this.state.isAuth);
    // // this.setState({isAuth: false} )
    //   if(currentPath == '/'){
    //   this.setState({
    //     hideNav: true
    //   })
    // }
    //   else{
    //       this.setState({
    //         hideNav: false
    //       })
    //     }
    // console.log('nav', this.state.hideNav);
  }

  render() {
    // TODO: Setup to work with real authentication

    // Hides navbar when not logged in
    let loggedSide = this.state.hideNav ? "" : <SideBar />;
    let loggedOut = this.state.isAuth ? <LogOut className="Logout" /> : "";
    // let logTest = this.state.isAuth ? '' : <button onClick={this.test} />;

    return (
      <Router>
<<<<<<< HEAD
      <div className="App">
      {currentPath == '/' ? 
      <Route exact path={'/'} render={() => <Landing auth={this.state.isAuth} />} />
      :
        <div className='MainAppComponents' >
        {/* <div className="CrumbBar">
        </div> */}
        <div className='top'>
          <Breadcrumbs id="Crumb" mappedRoutes={routes} />
          <LogOut className="LogBar" />
        </div>
          {/* <SideBar /> */}
          <div className='appPanel'>
          <DropBar /> 
          <Route exact path={'/create'} />
          <Route exact path={'/edit'} />
          <Route exact path={'/classes'} render={() => <ClassList />} />
          <Route exact path={'/classes/create'} render={() => <ClassForm />} />
          <Route exact path={'/classes/active'} render={() => <MagicRandomizer />} />
          {/* <Route exact path={'/billing'} render={() => < Billing/>} /> */}
          <Route exact path={'/settings'} render={() => <Setup />} />
          <Route exact path={'/about'} render={() => <About />} />
          <Route exact path={'/signup'} render={() => <SignUp />} />
          <Route exact path={'/login'} render={() => <LogIn />} />
          </div>
        
=======
        <div className="App">
          {currentPath == "/" ? (
            <Route
              exact
              path={"/"}
              render={() =>
                this.props.authed? <Redirect to="/api/classes/" /> : <Landing auth={this.state.isAuth} />}
            />
          ) : (
            <div className="MainAppComponents">
              <div className="CrumbBar">
                <Breadcrumbs id="Crumb" mappedRoutes={routes} />
              </div>
              <LogOut className="LogBar" />
              <SideBar />
              <div className="appPanel">
                <Route exact path={"/create"} />
                <Route exact path={"/edit"} />
                <Route exact path={"/classes"} render={() => <ClassList />} />
                <Route
                  exact
                  path={"/classes/create"}
                  render={() => <ClassForm />}
                />
                <Route
                  exact
                  path={"/classes/active"}
                  render={() => <MagicRandomizer />}
                />
                <Route exact path={"/billing"} render={() => <Billing />} />
                <Route exact path={"/settings"} render={() => <Setup />} />
                <Route exact path={"/about"} render={() => <About />} />
                <Route exact path={"/signup"} render={() => <SignUp />} />
                {/* <Route exact path={"/login"} render={() => <LogIn />} /> */}
                
              </div>
            </div>
          )}
          {/*App*/}
>>>>>>> master
        </div>
        {/* <Route exact path={'/addClass'} render={() => <AddClass />} /> */}
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    authed: state.authed
  };
};

export default connect(mapStateToProps, {})(App);
