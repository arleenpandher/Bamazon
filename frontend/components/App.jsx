import React from "react";
import LoginContainer from "../components/session_form/login_form_container"
import SignupContainer from "../components/session_form/signup_form_container"
import { Route, Routes, Switch, Redirect } from "react-router-dom"
import NavBar from "../components/nav_bar/nav_bar_container";
import {AuthRoute} from "../utils/route_util"



const App = () => (
  <div>
    <Switch>
        <Route exact path="/" component={NavBar}/>
        <AuthRoute path="/login" component={LoginContainer}/>
        <AuthRoute path="/signup" component={SignupContainer}/>
        <Redirect to="/"/>
    </Switch>
  </div>
 
);

export default App;