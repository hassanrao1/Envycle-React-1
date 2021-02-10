import React from "react";
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
import Signin from "../containers/signin"
import Signup from "../containers/signup"
import Vendor from "../containers/vendor"



  export default function AppRouter(){
        return(
                <Router>
                    <Route exact path="/" component={Signin}></Route>
                    <Route path="/signup" component={Signup}></Route>
                    <Route path="/user" component={Signup} ></Route>
                    <Route path="/vendor" component={Vendor}></Route>
                </Router>
        )
  }