import React from 'react';
import { Link } from "react-router-dom";
import CustomNavbar from '../components/CustomNavbar';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';

import { faMapMarkerAlt, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function JobDetail() {
  return (
    <div className="App">
      <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" q="team_url"/>
      <div className="h-100 container mt_70">
        <div className="row">
          <div className="col-sm-12 mx-auto">
            <div className="p-4 mt-2 mb-5">
              <div className="text-left py-4">
                <Link className="text-dark" to="/jobs">
                  <FontAwesomeIcon icon={faAngleLeft} className="mr-2" />
                  <span>Back to Jobs</span>
                </Link>
              </div>
              <h3 className="text-left common-title mb-3">Jobs at Enloya</h3>
              <div className="my-4 p-4 bg-white">
                <div className="row align-items-center">
                  <div className="col-sm-9">
                    <h5>Legal Council</h5>
                    <div class="row">
                      <div class="col-sm-6">
                        <p>GE - General Electric</p>
                      </div>
                      <div class="col-sm-6">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary mr-3" />
                        <span>Helsinborg Sweden</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-3">
                  <h5>Job Description</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna,
                    sit amet posuere magna. Donec scelerisque, lacus et dapibus porttitor, nisl purus rutrum lectus,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna, sit amet
                    posuere magna. Donec scelerisque, lacus et dapibus porttitor, nisl purus rutrum lectus,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna, sit amet
                    posuere magna. Donec scelerisque, lacus et dapibus porttitor, nisl purus rutrum lectus,
                    sit amet posuere magna. Donec scelerisque, lacus et dapibus porttitor, nisl purus rutrum lectus,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna, sit amet
                    posuere magna. Donec scelerisque, lacus et dapibus porttitor, nisl purus rutrum lectus,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna, sit amet
                    posuere magna. Donec scelerisque, lacus et dapibus porttitor, nisl purus rutrum lectus,
                  </p>
                </div>
                <div className="my-3">
                  <h5>Job Requirements</h5>
                  <div> - Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                  <div> - Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                  <div> - Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                  <div> - Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                  <div> - Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                  <div> - Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                  <div> - Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                  <div> - Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                </div>
                <div className="my-3">
                  <h5>Leadership Competencies</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna,
                    sit amet posuere magna. Donec scelerisque, lacus et dapibus porttitor, nisl purus rutrum lectus,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna, sit amet
                    posuere magna. Donec scelerisque, lacus et dapibus porttitor, nisl purus rutrum lectus,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna, sit amet
                    posuere magna. Donec scelerisque, lacus et dapibus porttitor, nisl purus rutrum lectus,
                    sit amet posuere magna. Donec scelerisque, lacus et dapibus porttitor, nisl purus rutrum lectus,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna, sit amet
                    posuere magna. Donec scelerisque, lacus et dapibus porttitor, nisl purus rutrum lectus,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna, sit amet
                    posuere magna. Donec scelerisque, lacus et dapibus porttitor, nisl purus rutrum lectus,
                  </p>
                </div>
                <div className="text-right">
                  <Link class="btn btn-yellow px-3" to="/">Apply Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer FooterData={FooterData} kind="otherPage"/>
    </div>
  );
}

export default JobDetail;
