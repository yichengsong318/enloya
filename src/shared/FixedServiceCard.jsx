import React from 'react';

export default function FixedServiceCard (props) {
  return (
    <div className="fixed-service">
      <div className="bg-gray header">
        <div className="d-flex justify-content-between">
          <h5>
            <a href={props.kind === 'lawyer_profile' ? "/fix-fee-services-show" : "/account-settings/fix-fee-services-detail"} style={{color: '#4b505e'}}>{props.name}</a>
            <div>{props.company}</div>
          </h5>
          <div className="priced">${props.price}</div>
        </div>
        <div>{props.service}</div>
        <div>{props.description}</div>
      </div>
      <div className="body">
        <p>{props.fullDescription}</p>
        { props.kind === 'lawyer_profile' ? (
          <><button type="type" className="btn btn-primary btn-block">Buy Now</button>
          <div className="text-center mt-2">
            <button type="type" className="btn btn-primary btn-sm mx-auto">Share</button>
          </div></>
        ) : (
          <>
          <a href="/account-settings/fix-fee-services-edit" className="btn btn-primary btn-block">Edit</a></>
        )}
      </div>
    </div>
  );
}
