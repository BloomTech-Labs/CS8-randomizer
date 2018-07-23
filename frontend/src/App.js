import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

<<<<<<< swedishgoodbye
// import SideBar from './navigation/SideBar';
import DropBar from './navigation/SideBar/SideDrop';
import LogOut from './navigation/LogOut';
=======
import SideBar from "./navigation/SideBar";
import LogOut from "./navigation/LogOut";
>>>>>>> User Signup and Login almost Done
// import TopBar from './navigation/TopBar';
import {
  Landing,
  MagicRandomizer,
  Setup,
  ClassList,
  About,
  SignUp,
<<<<<<< swedishgoodbye
  ClassForm,
  Home,
  Billing
} from "./components";
import Breadcrumbs from "react-router-dynamic-breadcrumbs";
import "./App.css";
// import Billing from "./components/Billing";

// import Billing from './components/Billing';


// Breadcrumb Routes
const routes = {
  "/": "Index",
  "/home": "Home",
=======
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
>>>>>>> User Signup and Login almost Done
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

<<<<<<< swedishgoodbye


  componentDidMount() {
    console.log("Mounted...");
    console.log(this.state.isAuth);

  }

  render() {
    // TODO: Setup to work with real authentication


    return (
      <Router>
<<<<<<< swedishgoodbye
=======
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
>>>>>>> User Signup and Login almost Done
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
<<<<<<< swedishgoodbye
              <div className="top">
                <Breadcrumbs id="Crumb" mappedRoutes={routes} />
                <LogOut className="LogBar" />
              </div>
              <div className="appPanel">
                <DropBar />
                <Route exact path={"/"} render={() => <Home />} />
=======
              <div className="CrumbBar">
                <Breadcrumbs id="Crumb" mappedRoutes={routes} />
              </div>
              <LogOut className="LogBar" />
              <SideBar />
              <div className="appPanel">
>>>>>>> User Signup and Login almost Done
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
<<<<<<< swedishgoodbye
                {/* <Route exact path={"/settings"} render={() => <Setup />} /> */}
                <Route exact path={"/about"} render={() => <About />} />
                <Route exact path={"/settings"} render={() => <Setup />} />
=======
                <Route exact path={"/settings"} render={() => <Setup />} />
                <Route exact path={"/about"} render={() => <About />} />
                <Route exact path={"/signup"} render={() => <SignUp />} />
>>>>>>> User Signup and Login almost Done
                {/* <Route exact path={"/login"} render={() => <LogIn />} /> */}
                
              </div>
            </div>
          )}
          {/*App*/}
<<<<<<< swedishgoodbye
        </div>
        {/* <Route exact path={'/addClass'} render={() => <AddClass />} /> */}
=======
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
          <Route exact path={'/classes/create'} render={() => <ClassForm />} />
          <Route exact path={'/classes/active'} render={() => <MagicRandomizer />} />
          {/* <Route exact path={'/billing'} render={() => < Billing/>} /> */}
          <Route exact path={'/settings'} render={() => <Setup />} />
          <Route exact path={'/about'} render={() => <About />} />
          <Route exact path={'/signup'} render={() => <SignUp />} />
          <Route exact path={'/login'} render={() => <LogIn />} />
          
          {/* MainAppComponents */}
        </div>
        {/*App*/}
      </div> 
        {/* <Route exact path={'/addClass'} render={() => <AddClass />} /> */}
        
>>>>>>> mock up billing done
=======
        </div>
        {/* <Route exact path={'/addClass'} render={() => <AddClass />} /> */}
>>>>>>> User Signup and Login almost Done
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

<<<<<<< swedishgoodbye
<<<<<<< swedishgoodbye
export default connect(mapStateToProps, {})(App);
=======
export default App;
>>>>>>> mock up billing done
=======
export default connect(mapStateToProps, {})(App);
>>>>>>> User Signup and Login almost Done
