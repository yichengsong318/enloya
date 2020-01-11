import React from 'react';

import pic from '../assets/pic.png';
import special from '../assets/special.jpg';

import { faMapMarkerAlt, faLanguage, faCheck, faPenAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LawyerCard (props) {
  return (
    <a href={"/lawyer-profile/" + props.lid} className={"lawyer-card p-3" + (props.bordered ? ' card-bordered' : '')}>
      {props.special && <img src={special} alt="en_pic" className="img-fluid special" />}
      <div className="row mx-0 align-items-center">
        <div className={props.type === 'grid' ? "col-sm-12 px-0 d-flex" : "col-sm-4 px-0 d-flex"}>
          <div>
            <img src={props.profilePic || pic} className="img-pic-user mr-3" alt="user_pic"/>
          </div>
          <div className="mt-3">
            <span style={{ color: '#4b505e' }}>{props.name}</span>
            <div className="font-weight-bold">{props.title}</div>
            {/* <Ratings rate={props.rateValue} total={props.rateTotal} /> */}
          </div>
        </div>
        <div className={props.type === 'grid' ? "col-sm-12 px-0" : "col-sm-4 px-0"}>
          {/* <div className="font-weight-bold mt-2 mb-1">${props.hourRate} USD/hour</div> */}
          <div className="font-weight-bold">Area of expertise</div>
          <div>{props.expertises || 'N/A'}</div>
        </div>
        <div className={props.type === 'grid' ? "col-sm-12 px-0" : "col-sm-4 px-0"}>
          <table className="table table-borderless my-3 table-p-0">
            <tbody>
              <tr>
                <td><FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary mr-2" /></td>
                <td>{props.location}</td>
              </tr>
              <tr>
                <td><FontAwesomeIcon icon={faLanguage} className="text-primary mr-2" /></td>
                <td>{props.languages}</td>
              </tr>
              <tr>
                <td><FontAwesomeIcon icon={faCheck} className="text-primary mr-2" /></td>
                <td>{props.status}</td>
              </tr>
              <tr>
                <td><FontAwesomeIcon icon={faPenAlt} className="text-primary mr-2" /></td>
                <td>{props.registration}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </a>
  );
}
