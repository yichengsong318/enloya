import React from 'react';
import { Link } from "react-router-dom";
import CustomNavbar from '../components/CustomNavbar';
import Footer from '../components/Footer/Footer';
// import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Register = () => {
    return(
      <div className="body_wrapper">
        <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn" q="team_url"/>
        <div className="h-100 container mt-5 pt-5">
          <div className="row">
            <div className="col-sm-6">
              <div className="auth-block">
                <h1 className="h1">Create your Enloya account</h1>
                <div className="row signup-wrapper">
                  <div className="col-sm-6 text-white">
                    <div className="signup-container signup-left">
                      <div className="header d-flex">
                        <FontAwesomeIcon icon={faUsers} className="signup-icon"/>
                        <div>
                          <h3 className="text-white mb-1">Clients</h3>
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
                        </div>
                      </div>
                      <ul className="mb-4">
                        <li>- We need some facts here</li>
                        <li>- Why they should sign up</li>
                        <li>- Why they should go premium</li>
                      </ul>
                      <div>
                        <Link to="/signup-lawyer" className="btn btn-primary btn-block">Sign Up Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 register-imager">
              <img src={require("../img/signup-right.jpg")} alt="" className="w-100"/>
            </div>
          </div>
        </div>
        <Footer FooterData={FooterData} kind="otherPage"/>
     </div>
    )
}

export default Register;
