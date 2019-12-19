import React from 'react';
import { Link } from "react-router-dom";

import Navbar from '../layout/Navbar';
import { FooterPro } from '../layout/Footer';

function ResetPassword() {
  return (
    <div className="App">
      <Navbar type="landing" full kind="login" />
      <div className="h-100 container">
        <div className="row">
          <div className="col-sm-4 mx-auto">
            <div className="auth-block">
              <h1 className="text-center common-title">Reset Password</h1>
              <p className="text-black">Please enter your email address so we can send you a new password.</p>
              <input type="email" className="form-control" placeholder="Email" />
              <button className="btn btn-warning btn-block mt-3" type="button">Reset Password</button>
              <div className="mt-2 text-center">
                <Link className="auth-link" to="/login">Try logging again</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterPro />
    </div>
  );
}

export default ResetPassword;
