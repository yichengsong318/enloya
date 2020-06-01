import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

export default function FixedServiceCard (props) {
  // console.log('props.lawyer', props.lawyer);
    const nameSize = props.name.length;
    const titleSize = props.lawyer.title ? props.lawyer.title.length : 0;
    const licencedCities = props.licencedCities;
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
          <h3 className={`${nameSize >= 30 && 'text-elipsis'} mb-0`}>
            <Link to={`/fix-fee-services-show?sid=${props.sid}`} style={{color: '#fff', fontSize: "16px"}}>{props.name}</Link>
          </h3>
          <CopyToClipboard
              text={shareLink}
              onCopy={handleCopyUrl}
          >
            <img alt="" src={require("../img/share-icon.png")} className="h-20 cursor-pointer"/>
          </CopyToClipboard>
        </div>
        <div className="mt-4"><b>Area of law:</b> {props.category}</div>
        <div className="line-height-1-5 mt-3"><b>Deliverable:</b> {props.deliverable ? props.deliverable : 'N/A'}</div>
        <div className="line-height-1-5 mt-1"><b>Estimated Delivery:</b> <span className="text-warning size-inherit">{props.deliveryTime && (props.deliveryTime.amount + " " + props.deliveryTime.unit)}</span></div>
      </div>
      <div className="body">
          { state.copied ? (<span className="copied-success">Web URL Copied!</span>) : ''}
        <div className="row mt-3 mt-3-mobile d-flex align-items-end">
            <div className="col-md-7 col-7 col-lg-7">
              <b>{props.lawyer.firstname} {props.lawyer.lastname}</b>
              <p className={`${titleSize >= 45 && 'text-elipsis-vertical'} subtitle font-italyc`}>{props.lawyer.title}</p>
              <p className="subtitle">Location: {props.lawyer.city}, {props.lawyer.country}</p>
              <p className="subtitle">Licenced in: {licencedCities}</p>
            </div>
            <div className="col-md-2 px-0 col-2">
              <img alt="" src={props.lawyer.profilePic} className="w-100"/>
            </div>
            <div className={props.isGrid ? "col-md-3 pl-1 text-right col-3" : "col-3 d-grid col-md-3 pl-1 text-right"}>
              <div className="priced">{
                props.currency === '$' || props.currency === 'CHF' ?
                  props.currency + '' + props.price :
                  props.currency === '€' ? props.price + '€' : '$' + props.price}</div>
              <Link to={props.kind === 'lawyer_profile' ?
              "/fix-fee-services-show?sid=" + props.sid : "/account-settings/fix-fee-services-detail?sid=" + props.sid} className="btn btn-yellowry btn-block mt-2">Details</Link>
            </div>
        </div>
      </div>
    </div>
  );
}
