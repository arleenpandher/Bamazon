import React from "react";
import LoginContainer from "../components/session_form/login_form_container"
import SignupContainer from "../components/session_form/signup_form_container"
import { Route, Routes, Switch, Redirect } from "react-router-dom"
import NavBar from "../components/nav_bar/nav_bar_container";
import {AuthRoute} from "../utils/route_util"
import SplashContainer from "../components/splash/splash_container"
import ProductContainer from "../components/products/products_container"
import ProductShowContainer from "../components/products/product_show_container"
import CartIndexContainer from "../components/cart/cart_index_container"
import CreateReviewContainer from "../components/review/create_review_container"


const App = () => (
  <div>
    <Switch>
        <Route exact path="/" component={SplashContainer}/>
        <Route exact path="/services/:serviceId/products" component={ProductContainer}/>
        <Route exact path="/products/:productId" component={ProductShowContainer}/>
        <Route exact path="/users/:userId/carts" component={CartIndexContainer}/>
        <Route exact path="/products/:productId/reviews" component={CreateReviewContainer}/>
        <Route exact path="//:productId" component={ProductShowContainer}/>
        <AuthRoute path="/login" component={LoginContainer}/>
        <AuthRoute path="/signup" component={SignupContainer}/>
        <Redirect to="/"/>
    </Switch>
  </div>
 
);

export default App;