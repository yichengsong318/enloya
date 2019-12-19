import React from 'react';

import Navbar from '../layout/Navbar';
import { FooterPro } from '../layout/Footer';
import SocialLogin from '../shared/SocialLogin';

function Login() {
  return (
    <div className="App">
      <Navbar type="landing" full kind="login" />
      <div className="h-100 container">
        <div className="auth-block">
          <h1 className="text-center common-title">Unlock the digital lawyer in you</h1>
            <div className="row">
              <div className="col-sm-4 mx-auto">
              <p className="text-black text-center mb-4">Get started - <strong>it's free</strong></p>
              <SocialLogin />
              <p className="text-danger d-none">Your email or password appears to be incorrect. Please try again !</p>
              <input type="text" className="form-control mt-3" placeholder="First Name"/>
              <input type="text" className="form-control mt-3" placeholder="Last Name"/>
              <input type="email" className="form-control mt-3" placeholder="Email"/>
              <input type="password" className="form-control mt-3" placeholder="Password"/>
              <p className="text-black small mt-3">
                By Clicking Join now, you agree to Enloya's Terms of Use Agreement,
                Privacy Policy and Cookie Policy</p>
              <button className="btn btn-warning btn-block mt-2" type="button">Join now</button>
            </div>
          </div>
        </div>
      </div>
      <FooterPro />
    </div>
  );
}

export default Login;
