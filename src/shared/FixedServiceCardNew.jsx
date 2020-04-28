import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

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
      <div className="header bg-white">
        <div className="row">
            <div className="col-md-11 col-11">
                <Link style={{color: '#4b505e'}}
                  to={props.kind === 'lawyer_profile' ?
                  "/fix-fee-services-show?sid=" + props.sid : "/account-settings/fix-fee-services-detail?sid=" + props.sid}>
                  <div className="d-flex justify-content-between">
                    <h5 className="mb-0">
                      <span style={{color: '#fff'}}>{props.name}</span>
                      {/* <div>{props.company}</div> */}
                    </h5>
                  </div>
                  <div className={`${nameSize <= 45 ? 'mt-4' : ''} line-height-1`}><b>Area of law:</b> {props.category}</div>
                  <div className="line-height-1-5 mt-3"><b>Deliverable:</b> {props.deliveryTime && (props.deliveryTime.amount + " " + props.deliveryTime.unit + " consultation")}</div>
                  <div className="line-height-1-5 mt-1"><b>Estimated Delivery:</b> {props.estimatedDelivery ? props.estimatedDelivery : <span className="text-warning size-inherit">Not defined</span>}</div>
                </Link>
            </div>

            <div className="col-1 col-md-1 pl-0">
            <CopyToClipboard
                text={shareLink}
                onCopy={handleCopyUrl}
            >
              <img alt="" src={require("../img/share-icon.png")} className="h-20 cursor-pointer"/>
            </CopyToClipboard>
            </div>

        </div>
      </div>
      <div className="body">
        { state.copied ? (<span className="copied-success">Web URL Copied!</span>) : ''}
        <div className="row mt-3">
            <div className="col-md-7 col-7">
              <b><Link className="text-dark" to={"/lawyer-profile/" + props.lawyer.id}>{props.lawyer.firstname} {props.lawyer.lastname}</Link></b>
              <p className="subtitle font-italyc">{props.lawyer.title}</p>
              <p className="subtitle">Location: {props.lawyer.city}, {props.lawyer.country}</p>
              <p className="subtitle">Licenced in: {props.lawyer.country}</p>
            </div>
            <div className="col-2 col-md-2 px-0">
              <img alt="" src={props.lawyer.profilePic} className={props.isGrid ? "w-100" : "w-80"}/>
            </div>
            <div className={props.isGrid ? "col-3 col-md-3 pl-1 text-right" : "col-3 d-grid col-md-3 pl-1 text-right"}>
              <div className="priced">${props.price}</div>
              <button type="type" className="btn btn-yellowry btn-block mt-2">Buy Now</button>
            </div>
        </div>
      </div>
    </div>
  );
}
