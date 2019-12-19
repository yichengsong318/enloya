import React from 'react';
import { Switch, Route, NavLink, Link, useRouteMatch } from "react-router-dom";

import CustomNavbar from '../components/CustomNavbar';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

import Ratings from '../shared/Ratings';

import pic from '../assets/pic-large.jpg';
import special from '../assets/special.jpg';

import FixedServices from './lawyer-profile/FixedServices';
import Reviews from './lawyer-profile/Reviews';
import About from './lawyer-profile/About';

import { faGraduationCap, faAngleLeft, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LawyerProfile() {

  let { path, url } = useRouteMatch();

  return (
    <div className="App">
      <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" q="team_url"/>
      <div className="bg-white mt_100 pt-5">
        <div className="container pb-4">
          <div className="text-left py-4">
            <Link className="text-dark" to="/jobs">
              <FontAwesomeIcon icon={faAngleLeft} className="mr-2" />
              <span>Back to search results</span>
            </Link>
          </div>
          <div className="row mx-0 align-items-center">
            <div className="col-sm-12 px-0 d-flex lawyer-card-large">
              <div>
                <img src={pic} className="img-pic-user-large mr-4" alt="user_pic" />
              </div>
              <div className="mt">
                <h2 className="font-weight-bold">
                  International Corporate Lawyer
                  <img src={special} alt="en_pic" className="img-fluid special-profil ml-3"/>
                </h2>
                <div>Daniel Smith</div>
                <div className="font-weight-bold">Partner, Baker &amp; McKenzie</div>
                <p className="mt-2">
                  Daniel has extensive experience representing clients in mergers and acquisitions and other corporate
                  transactions, acting as a main relationship partner for clients. He also advises clients on contractual liability
                  issues. He represents clients in the medtech and hightech industries.
                </p>
                <div className="row align-items-center">
                  <div className="col-sm-4 mb-2">
                    <div className="d-flex align-items-center">
                      <Ratings rate={4} total={5} />
                      <span className="ml-2 mt-1">4.0 (11,345 ratings)</span>
                    </div>
                  </div>
                  <div className="col-sm-3 mb-2 pt-1">Licensed in: Sweden and Finland</div>
                  <div className="col-sm-3 mb-2 pt-1">Licensed since: 2013</div>
                </div>
                <div className="row">
                  <div className="col-sm-4 mb-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary mr-2" />
                    <span>Helsinborg Sweden</span>
                  </div>
                  <div className="col-sm-4 mb-2">
                    <FontAwesomeIcon icon={faGraduationCap} className="text-primary mr-2" />
                    <span>USC</span>
                  </div>
                  <div className="col-sm-12 mb-2">
                    <span className="font-weight-bold mr-3">Area(s) of expertise</span>
                    <span>Litigation, Tradmark, Antitrust</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container floating-box-wrapper py-4">
        <div className="floating-box py-3 px-4">
          <h4 className="text-center mb-3">$300 / 30 minute Consultation</h4>
          <a href="/checkout" className="btn btn-primary btn-block">Book a Consultation</a>
          <button type="button" className="btn btn-outline-primary btn-block">Send a message</button>
        </div>
      </div>
      <div className="container mb-5 mt-5">
        <div className="row">
          <div className="col-sm-12 px-0">
            <div className="mt-5">
              <NavLink activeClassName="selected" className="toplink" to={`${url}/fixed-services`}>Fixed Price Services</NavLink>
              <NavLink activeClassName="selected" className="toplink" to={`${url}/reviews`}>Reviews</NavLink>
              <NavLink activeClassName="selected" className="toplink" to={`${url}/about`}>About</NavLink>
            </div>
            <div className="bg-white mt-2 p-3">
              <Switch>
                <Route exact path={path}>
                  <FixedServices kind="lawyer_profile" showCreate={false} />
                </Route>
                <Route path={`${path}/fixed-services`}>
                  <FixedServices kind="lawyer_profile" showCreate={false} />
                </Route>
                <Route path={`${path}/reviews`}>
                  <Reviews />
                </Route>
                <Route path={`${path}/about`}>
                  <About />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
      <FooterTwo FooterData={FooterData}/>
    </div>
  );
}

export default LawyerProfile;
