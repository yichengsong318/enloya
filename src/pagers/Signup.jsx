import React from 'react';
import { Link } from "react-router-dom";

import Navbar from '../layout/Navbar';
import { Footer } from '../layout/Footer';

import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login() {
  return (
    <div className="App">
      <Navbar type="basic" kind="login" />
      <div className="h-100 container">
        <div className="row">
          <div className="col-sm-10 mx-auto">
            <div className="auth-block">
              <h1 className="text-center h1">Sign Up to your free Enloya account today!</h1>
              <p className="text-dark lead text-center">Get the job done with the lawyer of your choice. From simple contacts to sophisticated interneational disputes. Finding and hiring a lawyer has never been easier.</p>
              <div className="row signup-wrapper">
                <div className="col-sm-6 text-white">
                  <div className="signup-container signup-left">
                    <div className="header d-flex">
                      <FontAwesomeIcon icon={faUsers} className="signup-icon"/>
                      <div>
                        <h3 className="mb-1">Clients</h3>
                        <p>Some text required here</p>
                      </div>
                    </div>
                    <ul className="mb-4">
                      <li>- We need some facts here</li>
                      <li>- Why they should sign up</li>
                      <li>- Why they should go premium</li>
                    </ul>
                    <div>
                      <Link to="/signup-client" className="btn btn-outline-white btn-block">Sign Up Now</Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="signup-container">
                    <div className="header d-flex">
                      <FontAwesomeIcon icon={faUsers} className="signup-icon text-logo-primary"/>
                      <div>
                        <h3 className="mb-1">Lawyers</h3>
                        <p className="some-text-required">Some text required here</p>
                      </div>
                    </div>
                    <ul className="mb-4">
                      <li>- We need some facts here</li>
                      <li>- Why they should sign up</li>
                      <li>- Why they should go premium</li>
                    </ul>
                    <div>
                      <Link to="/signup-lawyer" className="btn btn-yellow btn-block">Sign Up Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
