import React, { useState } from 'react';
import './Dropdown.css';

import { faAngleDown, faAngleUp, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Dropdown (props) {

  const [show, setShow] = useState(false);

  function handleClick () {
    setShow(!show);
  }

  return (
    <div className="dropdown-wrapper">
      {
        props.type === 'button' ?
        <div className="btn btn-outline-warning dropdown-trigger" onClick={handleClick}>
          <FontAwesomeIcon icon={faUserCircle}/>
          <span className="ml-2">{props.text}</span>
        </div>
        :
        <div className="dropdown-trigger" onClick={handleClick}>
          <span className="mr-2">{props.text}</span>
          { show ? 
            <FontAwesomeIcon icon={faAngleUp} className="angle-icon" />
            :
            <FontAwesomeIcon icon={faAngleDown} className="angle-icon" />
          }
        </div>
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