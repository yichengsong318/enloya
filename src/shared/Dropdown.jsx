import React, { useState } from 'react';
import './Dropdown.css';

import { faAngleDown, faAngleUp, faUserCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Dropdown (props) {

  const [show, setShow] = useState(false);

  function handleClick () {
    setShow(!show);
  }

  return (
    <div className="dropdown-wrapper ml-auto">
      {
        props.type === 'button' ?
          <div className="btn btn-outline-primary dropdown-trigger" onClick={handleClick}>
            <FontAwesomeIcon icon={faUserCircle}/>
            <span className="ml-2">{props.text}</span>
          </div>
        :
          (props.type === 'search' ?
            <div className="search-block" onClick={handleClick}>
              <input className="form-control mr-sm-2 input-search bg-white" readOnly type="search"
                placeholder="Click here to search for" aria-label="Search"/>
              <FontAwesomeIcon icon={faSearch} className="icon-search mt-1" />
            </div>
          :
            <div className="dropdown-trigger" onClick={handleClick}>
              <span className="mr-2">{props.text}</span>
              { show ? 
                <FontAwesomeIcon icon={faAngleUp} className="angle-icon" />
                :
                <FontAwesomeIcon icon={faAngleDown} className="angle-icon" />
              }
            </div>)
      }
      {
        show &&
        <div className={'dropdown-box dropdown-box-' + props.orientation}>
          {React.Children.map(props.children, function (child) { return child })}
        </div>
      }
    </div>
  );
}