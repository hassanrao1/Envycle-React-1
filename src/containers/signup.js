import React, { useRef, useState, useEffect } from 'react';
import hamaraImage from "./images/cm-main-img.png";
import "./css/app.css";
import './css/line-awesome.css'
import './css/responsive.css'
import './css/style.css'
import { Link } from "react-router-dom";
import url from "../secrets/index";
import axios from 'axios';
import userEvent from '@testing-library/user-event';

export default function Signup() {
    console.log("url is => ", url)
    var name = useRef();
    var email = useRef();
    var password = useRef();
    var address = useRef();



    function signUp(e) {
        e.preventDefault();
        axios({
            method: 'post',
            url: url + "/auth/signup",
            data: {
                userName: name.current.value,
                userEmail: email.current.value,
                userPassword: password.current.value,
                userAddress: address.current.value,
            },
        }).then((response) => {
            console.log("response", response);

            alert(response.data.message);

        }, (error) => {
            alert(error.response.data.message);
        })

    }





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
                                            <li> <Link to="/">Sigin </Link></li>
                                            <li data-tab="tab-2" className="current"><Link to="/signup">Signup </Link></li>
                                        </ul>

                                        <div className="sign_in_sec current" id="tab-2">


                                            <h3>Sign Up</h3>

                                            <div className="signup-tab">
                                                <i className="fa fa-long-arrow-left"></i>

                                                <ul>
                                                    <li data-tab="tab-3" className="current"><Link to="/signup"> User </Link></li>
                                                    {/* <li data-tab="tab-4"><a href="#" title="">Company</a></li> */}
                                                    <li >   <Link to="/vendor"> Company </Link> </li>

                                                </ul>
                                            </div>
                                            <div className="dff-tab current" id="tab-3">
                                                <form onSubmit={(e) => signUp(e)}>
                                                    <div className="row">
                                                        <div className="col-lg-12 no-pdd">
                                                            <div className="sn-field">
                                                                <input required ref={name} autoComplete="on" type="text" name="name" placeholder="Full Name" />
                                                                <i className="la la-user"></i>
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-lg-12 no-pdd">
                                                            <div className="sn-field">
                                                                <input  autoComplete="on" type="text" name="phone" placeholder="Enter Phone No" />
                                                                <i className="la la-globe"></i>
                                                            </div>
                                                        </div> */}

                                                        <div className="col-lg-12 no-pdd">
                                                            <div className="sn-field">
                                                                <input required ref={password} autoComplete="on" type="password" name="password" placeholder="Password" />
                                                                <i className="la la-lock"></i>
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-lg-12 no-pdd">
                                                            <div className="sn-field">
                                                                <input autoComplete="on" type="password" name="repeat-password"
                                                                    placeholder="Repeat Password" />
                                                                <i className="la la-lock"></i>
                                                            </div>
                                                        </div> */}
                                                        <div className="col-lg-12 no-pdd">
                                                            <div className="sn-field">
                                                                <input required ref={address} autoComplete="on" type="text" name="address" placeholder="address" />
                                                                <i className="la la-lock"></i>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 no-pdd">
                                                            <div className="sn-field">
                                                                <input required autoComplete="on" ref={email} type="text" placeholder="Enter email" />
                                                                <i className="la la-lock"></i>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 no-pdd">
                                                            <div className="checky-sec st2">
                                                                <div className="fgt-sec">
                                                                    <input autoComplete="on" type="checkbox" name="cc" id="c2" />
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