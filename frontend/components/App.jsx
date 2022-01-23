import React from "react";
import LoginContainer from "../components/session_form/login_form_container"
import SignupContainer from "../components/session_form/signup_form_container"
import { Route, Routes, Switch } from "react-router-dom"
import NavBar from "../components/nav_bar/nav_bar_container";
import Logo from "../../app/assets/images/logo.png"


const App = () => (
  <div>
    <div id="formlogo">
      <img  src={Logo}></img>
    </div>
    <Switch>
        <Route exact path="/" component={NavBar}/>
        <Route path="/login" component={LoginContainer}/>
        <Route path="/signup" component={SignupContainer}/>
    </Switch>
  </div>
 
);

export default App;