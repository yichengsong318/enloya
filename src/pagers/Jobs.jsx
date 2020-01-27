import React from 'react';
import { Link } from "react-router-dom";
import CustomNavbar from '../components/CustomNavbar';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';

import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function JobItem (props) {
  return (
    <div className="my-4 p-4 bg-white">
      <div className="row align-items-center">
        <div className="col-sm-9">
          <h5>{props.jobTitle}</h5>
          <div class="row">
            <div class="col-sm-6">
              <p>{props.company}</p>
            </div>
            <div class="col-sm-6">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary mr-3" />
              <span>{props.location}</span>
            </div>
          </div>
        </div>
        <div className="col-sm-3 text-right">
          <Link class="btn btn-primary px-5" to="/job-detail">View</Link>
        </div>
      </div>
    </div>
  )
}

function Jobs() {
  return (
    <div className="App">
      <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" q="team_url"/>
      <div className="bg-black py-5 mt_100">
        <h1 className="text-center common-title text-white">Join us and become apart of Enloya Today!</h1>
      </div>
      <div className="h-100 container">
        <div className="row">
          <div className="col-sm-12 mx-auto">
            <div className="p-4 my-5">
              <h3 className="text-left common-title mb-5">Jobs at Enloya</h3>
              <JobItem jobTitle="Legal Council" company="GE - General Electric" location="Helsinborg Sweden"/>
              <JobItem jobTitle="Legal Council" company="GE - General Electric" location="Helsinborg Sweden"/>
              <JobItem jobTitle="Legal Council" company="GE - General Electric" location="Helsinborg Sweden"/>
              <JobItem jobTitle="Legal Council" company="GE - General Electric" location="Helsinborg Sweden"/>
              <JobItem jobTitle="Legal Council" company="GE - General Electric" location="Helsinborg Sweden"/>
              <JobItem jobTitle="Legal Council" company="GE - General Electric" location="Helsinborg Sweden"/>
            </div>
          </div>
        </div>
      </div>
      <Footer FooterData={FooterData}/>
    </div>
  );
}

export default Jobs;
