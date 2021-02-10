import React from 'react';
import hamaraImage from "./images/cm-main-img.png";

import "./css/app.css";
import './css/line-awesome.css'
import './css/responsive.css'
import './css/style.css'

import {Link} from "react-router-dom";


export default function Vendor() {
    return (
        <div className="wrapper">
            <div className="wrapper">
                <div className="sign-in-page">
                    <div className="signin-popup">
                        <div className="signin-pop">
                            <div className="row">



                                <div className="col-lg-6">
                                    <div className="cmp-info">
                                        <div className="cm-logo">
                                            <img src="" alt="" />
                                            <p> Signup
                                                   </p>
                                        </div>
                                        <img src={hamaraImage} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="login-sec">
                                        <ul className="sign-control">
                                            {/* <li data-tab="tab-1" ><a href="#" title="">Sign in</a></li> */}
                                        <li>     <Link to="/">Sign in</Link></li>
                                            <li data-tab="tab-2" className="current"><Link to="/signup">Sign up</Link></li>
                                        </ul>



                                        <div className="sign_in_sec current" id="tab-2">


                                            <h3>Sign Up</h3>

                                            <div className="signup-tab">
                                                <i className="fa fa-long-arrow-left"></i>

                                                <ul>
                                                    {/* <li data-tab="tab-3" ><a href="#" title="">User</a></li> */}
                                                <li >     <Link to="/user">User </Link></li>
                                                    <li data-tab="tab-4" className="current"><Link to="/vendor">Company </Link></li>

                                                </ul>
                                            </div>
                                            <div className="dff-tab current" id="tab-4">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-lg-12 no-pdd">
                                                            <div className="sn-field">
                                                                <input autoComplete="on"  type="text" name="company-name"
                                                                    placeholder="Company Name" />
                                                                <i className="la la-building"></i>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 no-pdd">
                                                            <div className="sn-field">
                                                                <input autoComplete="on"  type="text" name="country" placeholder="Country" />
                                                                <i className="la la-globe"></i>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 no-pdd">
                                                            <div className="sn-field">
                                                                <input autoComplete="on"  type="password" name="password" placeholder="Password" />
                                                                <i className="la la-lock"></i>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 no-pdd">
                                                            <div className="sn-field">
                                                                <input autoComplete="on"  type="password" name="repeat-password"
                                                                    placeholder="Repeat Password" />
                                                                <i className="la la-lock"></i>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 no-pdd">
                                                            <div className="checky-sec st2">
                                                                <div className="fgt-sec">
                                                                    <input type="checkbox" name="cc" id="c3" />
                                                                    <label >
                                                                        <span></span>
                                                                    </label>
                                                                    <small>Yes, I understand and agree to the Envycle Terms And
                                                                Conditions.</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 no-pdd">
                                                            <button type="submit" value="submit">Get Started</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footy-sec">
                    <div className="container">


                    </div>
                </div>

            </div>
        </div>
    )
}