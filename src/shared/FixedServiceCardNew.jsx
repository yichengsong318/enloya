import React from 'react';

export default function FixedServiceCard (props) {
  return (
    <div className="fixed-service custom-fix-fee-service">
      <div className="header bg-white">
        <a style={{color: '#4b505e'}}
          href={props.kind === 'lawyer_profile' ?
          "/fix-fee-services-show?sid=" + props.sid : "/account-settings/fix-fee-services-detail?sid=" + props.sid}>
          <div className="d-flex justify-content-between">
            <h5 className="mb-0">
              <span style={{color: '#4b505e'}}>{props.name}</span>
              {/* <div>{props.company}</div> */}
            </h5>
          </div>
          <div className="line-height-1"><b>Area of law:</b> {props.category}</div>
          <div className="line-height-1-5 mt-3"><b>Delivrable:</b> {props.deliveryTime && (props.deliveryTime.amount + " " + props.deliveryTime.unit + " consultation")}</div>
          <div className="line-height-1-5 mt-1"><b>Estimated Delivery:</b> {props.estimatedDelivery ? props.estimatedDelivery : <span className="text-warning size-inherit">Not defined</span>}</div>
        </a>
      </div>
      <div className="body">
        <div className="row mt-3">
            <div className="col-md-7">
              <b>{props.lawyer.firstname} {props.lawyer.lastname}</b>
              <p className="subtitle font-italyc">{props.lawyer.title}</p>
              <p className="subtitle">Location: {props.lawyer.city}, {props.lawyer.country}</p>
              <p className="subtitle">Licenced in: {props.lawyer.country}</p>
            </div>
            <div className="col-md-2 px-0">
              <img src={props.lawyer.profilePic} className={props.isGrid ? "w-100" : "w-80"}/>
            </div>
            <div className={props.isGrid ? "col-md-3 pl-1 text-right" : "d-grid col-md-3 pl-1 text-right"}>
              <div className="priced">${props.price}</div>
              <button type="type" className="btn btn-yellowry btn-block mt-2">Buy Now</button>
            </div>
        </div>
      </div>
    </div>
  );
}
