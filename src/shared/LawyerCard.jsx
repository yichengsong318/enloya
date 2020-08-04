import React, { useState } from 'react';

import pic from '../assets/pic.png';
import special from '../assets/special.jpg';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { faMapMarkerAlt, faLanguage, faCheck, faPenAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LawyerCard (props) {
  const nameSize = props.name.length;
  const shareLink = props.lawyerPublicLink ? props.lawyerPublicLink : window.origin + "/lawyer-profile/" + props.lid;
  console.log('props', props, shareLink);
  const [state, setState] = useState({ copied: false });
  const handleCopyUrl = () => {
    setState({ copied: true });
    setTimeout(() => {
      setState({ copied: false });
    }, 5000);
  }
  return (
    <div
      className={"lawyer-card" +
      (props.type === 'grid' ? "" : " px-3 py-2") +
      (props.bordered ? ' card-bordered' : '')}>
      {props.special && <img src={special} alt="en_pic" className="img-fluid special" />}
      <div className={"border-radius-6 row lawyer-cad-bg mx-0 h-100 align-items-" + (props.type === 'grid' ? "start" : "center")}>
        <div className={props.type === 'grid' ? "col-sm-12 d-flex bg-white mb-3 pt-3 border-radius-top px-0" : "px-0 col-sm-4 d-flex mb-3 pt-3 border-radius-top"}>
          <div className="col-3">
            <img src={props.profilePic || pic} className="img-pic-user mr-2 mb-2" alt="user_pic"/>
          </div>
          <div className="col-9">
            <div className="row">
              <a href={"/lawyer-profile/" + props.lid} className={`${nameSize >= 29 ? 'text-elipsis' : ''} lawyer-name line-height-1 col-10`}>{props.name}</a>
              <div className="col-2">
                <CopyToClipboard
                    text={shareLink}
                    onCopy={handleCopyUrl}
                >
                  <img alt="" src={require("../img/share.png")} className="h-20 cursor-pointer align-top"/>
                </CopyToClipboard>
              </div>
            </div>
            <div className={props.type === 'grid' ? 'text-elipsis text-dark' : 'lawyer-title text-white'}>{props.title || 'Lawyer'}</div>
            <div className={props.type === 'grid' ? 'text-elipsis text-dark' : 'lawyer-title text-white'}>Hourly rate: <span className="float-right">{props.hourlyRate || '$-'} </span></div>
            {/* <Ratings rate={props.rateValue} total={props.rateTotal} /> */}
          </div>
        </div>
        <div className={props.type === 'grid' ? "col-sm-12" : "col-sm-4"}>
          {/* <div className="font-weight-bold mt-2 mb-1">${props.hourRate} USD/hour</div> */}
          { state.copied ? (<span className="copied-success">Web URL Copied!</span>) : ''}
          <div className="lawyer-expertizes-title">Area of expertise</div>
          <div className="lawyer-expertizes-content">{props.expertises || 'N/A'}</div>
        </div>
        <div className={props.type === 'grid' ? "col-sm-12 border-bottom-radius" : "col-sm-4 border-bottom-radius"}>
          <table className="table table-borderless table-p-0 w-auto mb-0">
            <tbody>
            {props.location &&
              <tr>
                <td><FontAwesomeIcon icon={faMapMarkerAlt} className="text-white mr-1"/></td>
                <td className="text-white">{props.location}</td>
              </tr>
            }
            {props.licencedIn &&
              <tr>
                <td><FontAwesomeIcon icon={faCheck} className="text-white mr-1"/></td>
                <td className="text-primary">{props.licencedIn}</td>
              </tr>
            }
            {props.registration &&
              <tr>
                <td><FontAwesomeIcon icon={faPenAlt} className="text-white mr-1"/></td>
                <td className="text-white">{props.registration}</td>
              </tr>
            }
            {props.languages &&
              <tr>
                <td><FontAwesomeIcon icon={faLanguage} className="text-white mr-1"/></td>
                <td className="text-white">{props.languages}</td>
              </tr>
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
