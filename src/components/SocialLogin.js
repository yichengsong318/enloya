import React from 'react';

import {
  // faGooglePlusG,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLogin = (props) => {
  
  return(
    <div className="social-logins d-flex my-3">
      {/* <div className="btn btn-default btn-google mr-2">
        <FontAwesomeIcon icon={faGooglePlusG}/>
        <span className="ml-1">Google</span>
      </div> */}
      <div onClick={props.linkedinClick} className="btn btn-default btn-linkedin btn-block py-3 mr-2">
        <FontAwesomeIcon icon={faLinkedinIn} />
        <span className="ml-2">Sign in LinkedIn</span>
      </div>
    </div>
  )
}

export default SocialLogin;
