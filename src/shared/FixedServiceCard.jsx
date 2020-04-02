import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function FixedServiceCard (props) {
    const nameSize = props.name.length;
    const shareLink = `${window.origin}/fix-fee-services-show?sid=${props.sid}`;
    const [state, setState] = useState({ copied: false });

    const handleCopyUrl = () => {
        setState({ copied: true });
        setTimeout(() => {
          setState({ copied: false });
        }, 5000);
    }

  return (
    <div className="fixed-service custom-fix-fee-service">
      <div className="header bg-white text-white">
          <div className="d-flex justify-content-between">
            <h3 className="mb-0">
              <a href={shareLink} style={{color: '#fff', fontSize: "16px"}}>{props.name}</a> 
              {/* <div>{props.company}</div> */}
            </h3>
            <CopyToClipboard
                text={shareLink}
                onCopy={handleCopyUrl}
            >
              <img alt="" src={require("../img/share-icon.png")} className="h-20 cursor-pointer"/>
            </CopyToClipboard>
          </div>
          <div className={`${nameSize <= 45 ? 'mt-4' : ''} line-height-1`}><b>Area of law:</b> {props.category}</div>
          <div className="line-height-1-5 mt-3"><b>Delivrable:</b> {props.deliveryTime && (props.deliveryTime.amount + " " + props.deliveryTime.unit + " consultation")}</div>
          <div className="line-height-1-5 mt-1"><b>Estimated Delivery:</b> {props.estimatedDelivery ? props.estimatedDelivery : <span className="text-warning size-inherit">Not defined</span>}</div>
      </div>
      <div className="body">
          { state.copied ? (<span className="copied-success">Web URL Copied!</span>) : ''}
        <div className="row mt-3">
            <div className="col-md-7">
              <b>{props.lawyer.firstname} {props.lawyer.lastname}</b>
              <p className="subtitle font-italyc">{props.lawyer.title}</p>
              <p className="subtitle">Location: {props.lawyer.city}, {props.lawyer.country}</p>
              <p className="subtitle">Licenced in: {props.lawyer.country}</p>
            </div>
            <div className="col-md-2 px-0">
              <img alt="" src={props.lawyer.profilePic} className="w-100"/>
            </div>
            <div className={props.isGrid ? "col-md-3 pl-1 text-right" : "d-grid col-md-3 pl-1 text-right"}>
              <div className="priced">${props.price}</div>
              <a href={props.kind === 'lawyer_profile' ?
              "/fix-fee-services-show?sid=" + props.sid : "/account-settings/fix-fee-services-detail?sid=" + props.sid} className="btn btn-yellowry btn-block mt-2">Details</a>
            </div>
        </div>
      </div>
    </div>
  );
}
