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
    <div className="dropdown-wrapper ml-auto">
      {
        props.type === 'button' ?
          <div className="dropdown-trigger" onClick={handleClick}>
            {
              props.userImage ?
              <img className="img-fluid rounded-circle img-menu-user" src={props.userImage} alt="user"/>
              :
              <FontAwesomeIcon icon={faUserCircle}/>
            }
            <span className="mx-2">{props.text}</span>
            { show ?
              <FontAwesomeIcon icon={faAngleUp} className="angle-icon align-middle" />
              :
              <FontAwesomeIcon icon={faAngleDown} className="angle-icon align-middle" />
            }
            <img src={require("../img/cart-icon.svg")} alt="" style={{ height: "25px", marginLeft: "10px"}}/>
          </div>
        :
          (props.type === 'search' ?
            <div className="search-block" onClick={handleClick}>
              <input className="form-control mr-sm-2 input-search" readOnly type="search"
                placeholder="Which legal job do you want done?" aria-label="Search"/>
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
