import React from 'react';

import pic from '../assets/pic.png';
import special from '../assets/special.jpg';

import { faMapMarkerAlt, faLanguage, faCheck, faPenAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LawyerCard (props) {
    const nameSize = props.name.length;
  return (
    <a href={"/lawyer-profile/" + props.lid}
      className={"lawyer-card" +
      (props.type === 'grid' ? " p-3" : " px-3 py-2") +
      (props.bordered ? ' card-bordered' : '')}>
      {props.special && <img src={special} alt="en_pic" className="img-fluid special" />}
      <div className={"row mx-0 h-100 align-items-" + (props.type === 'grid' ? "start" : "center")}>
        <div className={props.type === 'grid' ? "col-sm-12 px-0 d-flex" : "col-sm-4 px-0 d-flex"}>
          <div>
            <img src={props.profilePic || pic} className="img-pic-user mr-2" alt="user_pic"/>
          </div>
          <div>
            <span className={`${nameSize >= 29 ? 'text-elipsis' : ''} lawyer-name line-height-1`}>{props.name}</span>
            <div className="lawyer-title">{props.title || 'Lawyer'}</div>
            {/* <Ratings rate={props.rateValue} total={props.rateTotal} /> */}
          </div>
        </div>
        <div className={props.type === 'grid' ? "col-sm-12 px-0" : "col-sm-4 px-0"}>
          {/* <div className="font-weight-bold mt-2 mb-1">${props.hourRate} USD/hour</div> */}
          <div className="lawyer-expertizes-title">Area of expertise</div>
          <div className="lawyer-expertizes-content">{props.expertises || 'N/A'}</div>
        </div>
        <div className={props.type === 'grid' ? "col-sm-12 px-0" : "col-sm-4 px-0"}>
          <table className="table table-borderless table-p-0 w-auto mb-0">
            <tbody>
              <tr>
                <td><FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary mr-1"/></td>
                <td>{props.location}</td>
              </tr>
              <tr>
                <td><FontAwesomeIcon icon={faLanguage} className="text-primary mr-1"/></td>
                <td>{props.languages}</td>
              </tr>
              <tr>
                <td><FontAwesomeIcon icon={faCheck} className="text-primary mr-1"/></td>
                <td>{props.status}</td>
              </tr>
              <tr>
                <td><FontAwesomeIcon icon={faPenAlt} className="text-primary mr-1"/></td>
                <td>{props.registration}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </a>
  );
}
