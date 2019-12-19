import React from 'react';

import {
  faGooglePlusG,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialLogin (props) {
  return (
    <div className="social-logins d-flex my-3">
      <div className="btn btn-default btn-google mr-2">
        <FontAwesomeIcon icon={faGooglePlusG}/>
        <span className="ml-1">Google</span>
      </div>
      <div className="btn btn-default btn-linkedin mr-2">
        <FontAwesomeIcon icon={faLinkedinIn} />
        <span className="ml-1">LinkedIn</span>
      </div>
    </div>
  );
}